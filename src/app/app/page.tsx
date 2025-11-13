"use client";

import { useState } from "react";
import { 
  Syringe, 
  Camera, 
  TrendingUp, 
  Settings,
  Plus,
  Calendar,
  Target,
  Droplet,
  Apple,
  Activity,
  MessageSquare,
  Send,
  ThumbsUp,
  Lightbulb
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function AppPage() {
  const [injectionDays, setInjectionDays] = useState(0);
  const [todayCalories, setTodayCalories] = useState(0);
  const [todayProtein, setTodayProtein] = useState(0);
  const [todayFiber, setTodayFiber] = useState(0);
  const [todayWater, setTodayWater] = useState(0);
  const [suggestion, setSuggestion] = useState("");
  const [suggestions, setSuggestions] = useState([
    {
      id: 1,
      text: "Adicionar lembretes personalizados para horários de refeição",
      votes: 45,
      author: "Maria S.",
      date: "Há 2 dias"
    },
    {
      id: 2,
      text: "Integração com smartwatch para monitorar atividades físicas",
      votes: 38,
      author: "João P.",
      date: "Há 3 dias"
    },
    {
      id: 3,
      text: "Gráfico de evolução de peso ao longo do tempo",
      votes: 52,
      author: "Ana C.",
      date: "Há 5 dias"
    },
    {
      id: 4,
      text: "Receitas saudáveis com contagem automática de calorias",
      votes: 67,
      author: "Carlos M.",
      date: "Há 1 semana"
    },
    {
      id: 5,
      text: "Modo offline para registrar dados sem internet",
      votes: 29,
      author: "Paula R.",
      date: "Há 1 semana"
    }
  ]);

  const handleAddInjection = () => {
    setInjectionDays(injectionDays + 1);
  };

  const handleAddSuggestion = () => {
    if (suggestion.trim()) {
      const newSuggestion = {
        id: suggestions.length + 1,
        text: suggestion,
        votes: 0,
        author: "Você",
        date: "Agora"
      };
      setSuggestions([newSuggestion, ...suggestions]);
      setSuggestion("");
    }
  };

  const handleVote = (id: number) => {
    setSuggestions(suggestions.map(s => 
      s.id === id ? { ...s, votes: s.votes + 1 } : s
    ).sort((a, b) => b.votes - a.votes));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-lg border-b-4 border-purple-500">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-3 rounded-2xl shadow-lg">
                <Syringe className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  OzempicTrack
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Seu parceiro no tratamento
                </p>
              </div>
            </div>
            <Button variant="outline" size="icon" className="rounded-full">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid bg-white dark:bg-gray-800 p-1 rounded-xl shadow-lg">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-600 data-[state=active]:text-white">
              <Activity className="w-4 h-4 mr-2" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="injections" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-600 data-[state=active]:text-white">
              <Syringe className="w-4 h-4 mr-2" />
              Injeções
            </TabsTrigger>
            <TabsTrigger value="nutrition" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-600 data-[state=active]:text-white">
              <Apple className="w-4 h-4 mr-2" />
              Nutrição
            </TabsTrigger>
            <TabsTrigger value="suggestions" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-600 data-[state=active]:text-white">
              <Lightbulb className="w-4 h-4 mr-2" />
              Sugestões
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-2 border-purple-200 dark:border-purple-800 shadow-xl hover:shadow-2xl transition-all">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Dias de Tratamento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                    {injectionDays}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    dias consecutivos
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 dark:border-blue-800 shadow-xl hover:shadow-2xl transition-all">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    <Apple className="w-4 h-4" />
                    Calorias Hoje
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                    {todayCalories}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    kcal consumidas
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 dark:border-green-800 shadow-xl hover:shadow-2xl transition-all">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Proteínas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400">
                    {todayProtein}g
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    de 100g meta
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-cyan-200 dark:border-cyan-800 shadow-xl hover:shadow-2xl transition-all">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    <Droplet className="w-4 h-4" />
                    Água
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400">
                    {todayWater}L
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    de 2L meta
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 border-purple-200 dark:border-purple-800 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                  Progresso Semanal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-gray-500 dark:text-gray-400">
                  <div className="text-center space-y-2">
                    <Activity className="w-16 h-16 mx-auto text-purple-300" />
                    <p>Gráficos de progresso em breve</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Injections Tab */}
          <TabsContent value="injections" className="space-y-6">
            <Card className="border-2 border-purple-200 dark:border-purple-800 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Syringe className="w-5 h-5 text-purple-600" />
                  Controle de Injeções
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-2xl">
                    <div className="text-center">
                      <div className="text-4xl font-bold">{injectionDays}</div>
                      <div className="text-sm">dias</div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Dias consecutivos de tratamento
                  </p>
                </div>

                <Button 
                  onClick={handleAddInjection}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg shadow-lg"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Registrar Injeção de Hoje
                </Button>

                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                    Histórico Recente
                  </h3>
                  <div className="space-y-3">
                    {[...Array(Math.min(injectionDays, 5))].map((_, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                          <Syringe className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 dark:text-white">
                            Injeção aplicada
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Há {i + 1} {i === 0 ? 'dia' : 'dias'}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Nutrition Tab */}
          <TabsContent value="nutrition" className="space-y-6">
            <Card className="border-2 border-blue-200 dark:border-blue-800 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="w-5 h-5 text-blue-600" />
                  Análise de Refeições com IA
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-12 text-center hover:border-blue-500 transition-all cursor-pointer">
                  <Camera className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Tire uma foto da sua refeição
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    A IA analisará automaticamente as calorias e nutrientes
                  </p>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-6 text-lg shadow-lg">
                  <Camera className="w-5 h-5 mr-2" />
                  Tirar Foto da Refeição
                </Button>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 border-green-200 dark:border-green-800 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Proteínas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                    {todayProtein}g
                  </div>
                  <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all"
                      style={{ width: `${Math.min((todayProtein / 100) * 100, 100)}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Meta: 100g/dia
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-200 dark:border-orange-800 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Apple className="w-4 h-4" />
                    Fibras
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                    {todayFiber}g
                  </div>
                  <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full transition-all"
                      style={{ width: `${Math.min((todayFiber / 30) * 100, 100)}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Meta: 30g/dia
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-cyan-200 dark:border-cyan-800 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Droplet className="w-4 h-4" />
                    Água
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">
                    {todayWater}L
                  </div>
                  <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${Math.min((todayWater / 2) * 100, 100)}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Meta: 2L/dia
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Suggestions Tab */}
          <TabsContent value="suggestions" className="space-y-6">
            <Card className="border-2 border-yellow-200 dark:border-yellow-800 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-600" />
                  Sugira Melhorias para o App
                </CardTitle>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Sua opinião é muito importante! Compartilhe ideias de funcionalidades que você gostaria de ver no aplicativo.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Textarea
                    placeholder="Descreva sua sugestão de funcionalidade..."
                    value={suggestion}
                    onChange={(e) => setSuggestion(e.target.value)}
                    className="min-h-[100px] resize-none"
                  />
                  <Button 
                    onClick={handleAddSuggestion}
                    disabled={!suggestion.trim()}
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white shadow-lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Sugestão
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 dark:border-purple-800 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-purple-600" />
                  Sugestões da Comunidade
                </CardTitle>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Vote nas sugestões que você mais gostaria de ver implementadas
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {suggestions.map((item) => (
                    <div 
                      key={item.id}
                      className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleVote(item.id)}
                        className="flex-col h-auto py-2 px-3 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                      >
                        <ThumbsUp className="w-4 h-4 mb-1" />
                        <span className="text-xs font-bold">{item.votes}</span>
                      </Button>
                      <div className="flex-1 space-y-2">
                        <p className="text-gray-900 dark:text-white font-medium">
                          {item.text}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400">
                          <span className="font-medium">{item.author}</span>
                          <span>•</span>
                          <span>{item.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
