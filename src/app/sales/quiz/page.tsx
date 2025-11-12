"use client";

import { useState } from "react";
import { 
  ArrowRight, 
  ArrowLeft,
  Check,
  Sparkles,
  Target,
  TrendingUp,
  Heart,
  Clock,
  Award,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    value: string;
    icon?: any;
  }[];
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Há quanto tempo você usa medicamentos como Ozempic?",
    options: [
      { text: "Menos de 1 mês", value: "beginner", icon: Clock },
      { text: "1-3 meses", value: "intermediate", icon: TrendingUp },
      { text: "3-6 meses", value: "experienced", icon: Target },
      { text: "Mais de 6 meses", value: "expert", icon: Award }
    ]
  },
  {
    id: 2,
    question: "Qual é sua maior dificuldade no tratamento?",
    options: [
      { text: "Lembrar das injeções", value: "tracking", icon: Clock },
      { text: "Controlar alimentação", value: "nutrition", icon: Heart },
      { text: "Acompanhar progresso", value: "progress", icon: TrendingUp },
      { text: "Todas as opções", value: "all", icon: Sparkles }
    ]
  },
  {
    id: 3,
    question: "Com que frequência você registra suas refeições?",
    options: [
      { text: "Nunca registro", value: "never", icon: Clock },
      { text: "Às vezes", value: "sometimes", icon: Target },
      { text: "Quase sempre", value: "often", icon: TrendingUp },
      { text: "Sempre registro", value: "always", icon: Award }
    ]
  },
  {
    id: 4,
    question: "Qual recurso seria mais útil para você?",
    options: [
      { text: "Análise de fotos com IA", value: "ai", icon: Sparkles },
      { text: "Lembretes de injeção", value: "reminders", icon: Clock },
      { text: "Estatísticas detalhadas", value: "stats", icon: TrendingUp },
      { text: "Catálogo de medicamentos", value: "catalog", icon: Target }
    ]
  },
  {
    id: 5,
    question: "Qual é seu objetivo principal?",
    options: [
      { text: "Perder peso", value: "weight", icon: TrendingUp },
      { text: "Controlar diabetes", value: "diabetes", icon: Heart },
      { text: "Melhorar saúde geral", value: "health", icon: Sparkles },
      { text: "Todos os objetivos", value: "all", icon: Award }
    ]
  }
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  const handleAnswer = (value: string) => {
    setSelectedOption(value);
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(answers[currentQuestion + 1] || null);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[currentQuestion - 1] || null);
    }
  };

  const getRecommendedPlan = () => {
    const answerValues = Object.values(answers);
    
    // Lógica simples de recomendação baseada nas respostas
    if (answerValues.includes("expert") || answerValues.includes("always")) {
      return {
        name: "Plano Anual",
        price: "R$ 199,90",
        period: "/ano",
        save: "Economize 44%",
        description: "Perfeito para usuários experientes que querem o máximo de recursos",
        features: [
          "Análise ilimitada de fotos com IA",
          "Relatórios avançados e insights",
          "Consultoria nutricional inclusa",
          "Prioridade em novos recursos",
          "Suporte VIP 24/7"
        ]
      };
    } else if (answerValues.includes("intermediate") || answerValues.includes("often")) {
      return {
        name: "Plano Trimestral",
        price: "R$ 69,90",
        period: "/3 meses",
        save: "Economize 22%",
        description: "Ideal para quem está comprometido com resultados consistentes",
        features: [
          "Análise ilimitada de fotos com IA",
          "Controle completo de injeções",
          "Estatísticas detalhadas",
          "Atualizações gratuitas",
          "Suporte prioritário"
        ]
      };
    } else {
      return {
        name: "Plano Mensal",
        price: "R$ 29,90",
        period: "/mês",
        save: "Comece agora",
        description: "Ótimo para começar e testar todos os recursos",
        features: [
          "Análise ilimitada de fotos com IA",
          "Controle de injeções",
          "Estatísticas básicas",
          "Catálogo de medicamentos",
          "Suporte por email"
        ]
      };
    }
  };

  if (showResults) {
    const recommendedPlan = getRecommendedPlan();

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-purple-300 dark:border-purple-700 shadow-2xl">
            <CardHeader className="text-center space-y-4 pb-8">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <Check className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-4xl font-bold text-gray-900 dark:text-white">
                Análise Completa!
              </CardTitle>
              <CardDescription className="text-lg">
                Baseado nas suas respostas, este é o plano perfeito para você
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Recommended Plan */}
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-2xl p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{recommendedPlan.name}</h3>
                    <p className="text-white/90">{recommendedPlan.description}</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <p className="text-sm font-bold">{recommendedPlan.save}</p>
                  </div>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-bold">{recommendedPlan.price}</span>
                  <span className="text-2xl text-white/80">{recommendedPlan.period}</span>
                </div>

                <div className="space-y-3">
                  {recommendedPlan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why This Plan */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 space-y-4">
                <h4 className="font-bold text-xl text-gray-900 dark:text-white flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                  Por que este plano é ideal para você?
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Baseado no seu nível de experiência com o tratamento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Recursos alinhados com suas principais necessidades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Melhor custo-benefício para seus objetivos</span>
                  </li>
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg py-6"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Assinar {recommendedPlan.name} Agora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <div className="flex gap-4">
                  <Link href="/sales" className="flex-1">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full"
                    >
                      Ver Todos os Planos
                    </Button>
                  </Link>
                  <Link href="/" className="flex-1">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full"
                    >
                      Testar Grátis
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Guarantee */}
              <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
                  <Award className="w-5 h-5 text-green-600" />
                  Garantia de 30 dias - 100% do seu dinheiro de volta
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Restart Quiz */}
          <div className="text-center mt-8">
            <Button
              variant="ghost"
              onClick={() => {
                setCurrentQuestion(0);
                setAnswers({});
                setShowResults(false);
                setSelectedOption(null);
              }}
            >
              Refazer Quiz
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Pergunta {currentQuestion + 1} de {quizQuestions.length}
            </span>
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
              {Math.round(progress)}% completo
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-gray-900 dark:text-white">
              {question.question}
            </CardTitle>
            <CardDescription>
              Selecione a opção que melhor descreve sua situação
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {question.options.map((option, index) => {
              const Icon = option.icon;
              const isSelected = selectedOption === option.value;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.value)}
                  className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                    isSelected
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/30 shadow-lg scale-105'
                      : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {Icon && (
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        isSelected
                          ? 'bg-gradient-to-br from-purple-500 to-pink-600'
                          : 'bg-gray-100 dark:bg-gray-800'
                      }`}>
                        <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-gray-600 dark:text-gray-400'}`} />
                      </div>
                    )}
                    <div className="flex-1">
                      <p className={`text-lg font-medium ${
                        isSelected 
                          ? 'text-purple-900 dark:text-purple-100' 
                          : 'text-gray-900 dark:text-white'
                      }`}>
                        {option.text}
                      </p>
                    </div>
                    {isSelected && (
                      <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex gap-4 mt-8">
          <Button
            variant="outline"
            size="lg"
            onClick={handleBack}
            disabled={currentQuestion === 0}
            className="flex-1"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar
          </Button>
          <Button
            size="lg"
            onClick={handleNext}
            disabled={!selectedOption}
            className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
          >
            {currentQuestion === quizQuestions.length - 1 ? 'Ver Resultado' : 'Próxima'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Back to Sales */}
        <div className="text-center mt-8">
          <Link href="/sales">
            <Button variant="ghost">
              Voltar para página de vendas
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
