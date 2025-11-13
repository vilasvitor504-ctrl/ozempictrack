"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Plus, Syringe, TrendingUp, Clock, CheckCircle2 } from "lucide-react";

interface Dose {
  id: string;
  date: string;
  time: string;
  dosage: string;
}

export default function OzempicTracker() {
  const [doses, setDoses] = useState<Dose[]>([]);
  const [dosage, setDosage] = useState("0.25");
  const [showForm, setShowForm] = useState(false);

  const addDose = () => {
    const now = new Date();
    const newDose: Dose = {
      id: Date.now().toString(),
      date: now.toLocaleDateString('pt-BR'),
      time: now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      dosage: dosage
    };
    setDoses([newDose, ...doses]);
    setShowForm(false);
  };

  const nextDoseDate = () => {
    if (doses.length === 0) return "Nenhuma dose registrada";
    const lastDose = new Date(doses[0].date.split('/').reverse().join('-'));
    const nextDose = new Date(lastDose);
    nextDose.setDate(nextDose.getDate() + 7);
    return nextDose.toLocaleDateString('pt-BR');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg mb-4">
            <Syringe className="w-6 h-6" />
            <h1 className="text-2xl font-bold">Ozempic Tracker</h1>
          </div>
          <p className="text-gray-600">Acompanhe suas doses de Ozempic</p>
        </div>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <Card className="border-2 border-blue-200 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total de Doses</p>
                  <p className="text-2xl font-bold text-gray-900">{doses.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Próxima Dose</p>
                  <p className="text-sm font-bold text-gray-900">{nextDoseDate()}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Última Dose</p>
                  <p className="text-sm font-bold text-gray-900">
                    {doses.length > 0 ? `${doses[0].dosage}mg` : "N/A"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Add Dose Button */}
        {!showForm && (
          <div className="mb-8 text-center">
            <Button
              onClick={() => setShowForm(true)}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Plus className="w-5 h-5 mr-2" />
              Registrar Nova Dose
            </Button>
          </div>
        )}

        {/* Add Dose Form */}
        {showForm && (
          <Card className="mb-8 border-2 border-blue-300 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Syringe className="w-5 h-5 text-blue-600" />
                Registrar Dose
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="dosage">Dosagem (mg)</Label>
                <Input
                  id="dosage"
                  type="number"
                  step="0.25"
                  value={dosage}
                  onChange={(e) => setDosage(e.target.value)}
                  className="mt-1"
                  placeholder="0.25"
                />
              </div>
              <div className="flex gap-3">
                <Button
                  onClick={addDose}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Confirmar
                </Button>
                <Button
                  onClick={() => setShowForm(false)}
                  variant="outline"
                  className="flex-1"
                >
                  Cancelar
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Doses History */}
        <Card className="border-2 border-gray-200 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-600" />
              Histórico de Doses
            </CardTitle>
          </CardHeader>
          <CardContent>
            {doses.length === 0 ? (
              <div className="text-center py-12">
                <Syringe className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">Nenhuma dose registrada ainda</p>
                <p className="text-gray-400 text-sm mt-2">Clique em "Registrar Nova Dose" para começar</p>
              </div>
            ) : (
              <div className="space-y-3">
                {doses.map((dose) => (
                  <div
                    key={dose.id}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <Syringe className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{dose.dosage}mg</p>
                        <p className="text-sm text-gray-600">
                          {dose.date} às {dose.time}
                        </p>
                      </div>
                    </div>
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Footer Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            💉 Lembre-se: Ozempic deve ser aplicado uma vez por semana
          </p>
        </div>
      </div>
    </div>
  );
}
