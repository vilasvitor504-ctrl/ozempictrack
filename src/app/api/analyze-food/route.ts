import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { image } = await request.json();

    if (!image) {
      return NextResponse.json(
        { error: 'Imagem não fornecida' },
        { status: 400 }
      );
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: `Analise esta imagem de comida e forneça uma estimativa nutricional detalhada em formato JSON.

Retorne APENAS um objeto JSON válido (sem markdown, sem explicações) com esta estrutura exata:
{
  "food_name": "nome do alimento em português",
  "calories": número estimado de calorias totais,
  "protein": gramas de proteína,
  "fiber": gramas de fibra,
  "carbs": gramas de carboidratos,
  "fat": gramas de gordura,
  "portion_size": "descrição da porção estimada",
  "confidence": "high/medium/low",
  "notes": "observações relevantes sobre a análise"
}

Seja preciso e realista nas estimativas. Se não conseguir identificar claramente, indique confidence como "low".`,
            },
            {
              type: 'image_url',
              image_url: {
                url: image,
              },
            },
          ],
        },
      ],
      max_tokens: 500,
    });

    const content = response.choices[0]?.message?.content;
    
    if (!content) {
      throw new Error('Resposta vazia da API');
    }

    // Parse do JSON retornado
    const nutritionData = JSON.parse(content);

    return NextResponse.json({
      success: true,
      data: nutritionData,
    });
  } catch (error) {
    console.error('Erro ao analisar imagem:', error);
    return NextResponse.json(
      { 
        error: 'Erro ao analisar a imagem',
        details: error instanceof Error ? error.message : 'Erro desconhecido'
      },
      { status: 500 }
    );
  }
}
