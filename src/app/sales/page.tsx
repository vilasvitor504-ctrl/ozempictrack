"use client";

import { useState } from "react";
import { 
  Syringe, 
  Camera, 
  TrendingUp, 
  Shield, 
  Sparkles,
  Check,
  ArrowRight,
  Star,
  Users,
  Clock,
  Heart,
  Zap,
  Target,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function SalesPage() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: Camera,
      title: "Análise de Calorias com IA",
      description: "Tire uma foto da sua refeição e descubra instantaneamente as calorias, proteínas e nutrientes",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Syringe,
      title: "Controle de Injeções",
      description: "Nunca mais esqueça suas aplicações. Acompanhe dias e histórico completo",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: TrendingUp,
      title: "Estatísticas Detalhadas",
      description: "Visualize seu progresso com gráficos e médias semanais personalizadas",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Target,
      title: "Metas Personalizadas",
      description: "Configure suas metas de proteínas, fibras e água de acordo com suas necessidades",
      color: "from-orange-500 to-red-600"
    }
  ];

  const benefits = [
    "Análise de fotos com Inteligência Artificial",
    "Controle completo de injeções e cronograma",
    "Acompanhamento de proteínas, fibras e água",
    "Catálogo completo de medicamentos similares",
    "Estatísticas e relatórios detalhados",
    "Interface intuitiva e fácil de usar",
    "Dados salvos com segurança no seu dispositivo",
    "Suporte para modo claro e escuro"
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Usuária há 3 meses",
      content: "Revolucionou minha rotina! A análise de fotos com IA é incrível, economizo muito tempo contando calorias.",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Usuário há 6 meses",
      content: "Nunca mais esqueci minhas injeções. O app me lembra e ainda mostra meu progresso de forma clara.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Usuária há 4 meses",
      content: "O catálogo de medicamentos me ajudou a entender melhor as opções. Muito completo e informativo!",
      rating: 5
    }
  ];

  const plans = [
    {
      name: "Mensal",
      price: "R$ 29,90",
      period: "/mês",
      features: [
        "Análise ilimitada de fotos com IA",
        "Controle completo de injeções",
        "Estatísticas detalhadas",
        "Catálogo de medicamentos",
        "Suporte prioritário"
      ],
      popular: false
    },
    {
      name: "Trimestral",
      price: "R$ 69,90",
      period: "/3 meses",
      save: "Economize 22%",
      features: [
        "Tudo do plano mensal",
        "3 meses de acesso completo",
        "Atualizações gratuitas",
        "Suporte VIP",
        "Relatórios avançados"
      ],
      popular: true
    },
    {
      name: "Anual",
      price: "R$ 199,90",
      period: "/ano",
      save: "Economize 44%",
      features: [
        "Tudo do plano trimestral",
        "12 meses de acesso completo",
        "Prioridade em novos recursos",
        "Consultoria nutricional",
        "Garantia de 30 dias"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Tecnologia de IA para seu tratamento
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Transforme seu tratamento com
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                OzempicTrack
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              O aplicativo mais completo para quem usa Ozempic e medicamentos similares. 
              Controle suas injeções, analise calorias com IA e alcance seus objetivos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link href="/sales/quiz">
                <Button 
                  size="lg" 
                  className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-2xl hover:scale-105 transition-all"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Fazer Quiz e Começar Agora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6"
                >
                  Ver Demonstração Grátis
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-8 pt-8 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>+5.000 usuários</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                <span>4.9/5 estrelas</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>100% seguro</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor" className="text-white dark:text-gray-900"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Recursos que fazem a diferença
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Tecnologia de ponta para simplificar seu tratamento e potencializar seus resultados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 hover:border-purple-300 dark:hover:border-purple-700 transition-all cursor-pointer hover:shadow-2xl"
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <CardContent className="p-6 space-y-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center transform transition-transform ${hoveredFeature === index ? 'scale-110 rotate-6' : ''}`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Tudo que você precisa em um só lugar
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Recursos completos para seu sucesso no tratamento
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              O que nossos usuários dizem
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Milhares de pessoas já transformaram seu tratamento
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 hover:shadow-2xl transition-all">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Escolha seu plano ideal
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Investimento que transforma sua saúde
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-2 transition-all hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-purple-500 dark:border-purple-600 shadow-xl scale-105' 
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      MAIS POPULAR
                    </div>
                  </div>
                )}
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    {plan.save && (
                      <p className="text-green-600 dark:text-green-400 font-medium text-sm">
                        {plan.save}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 ml-2">
                      {plan.period}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/sales/quiz" className="block">
                    <Button
                      className={`w-full py-6 text-lg ${
                        plan.popular
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                          : 'bg-gray-900 hover:bg-gray-800 text-white dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100'
                      }`}
                    >
                      Fazer Quiz e Assinar
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              Garantia de 30 dias - 100% do seu dinheiro de volta se não gostar
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Pronto para transformar seu tratamento?
            </h2>
            <p className="text-xl text-white/90">
              Faça nosso quiz rápido e descubra o plano perfeito para você
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sales/quiz">
                <Button 
                  size="lg" 
                  className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-2xl hover:scale-105 transition-all"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Fazer Quiz Agora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <p className="text-sm text-white/80">
              ⚡ Sem compromisso • 🔒 Dados seguros • ✨ Resultado instantâneo
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-2 rounded-xl">
                <Syringe className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-xl">OzempicTrack</p>
                <p className="text-sm text-gray-400">Seu parceiro no tratamento</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400">
                © 2024 OzempicTrack. Todos os direitos reservados.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Este produto não substitui orientação médica profissional
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
