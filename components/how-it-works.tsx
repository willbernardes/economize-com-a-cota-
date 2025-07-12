import { Card, CardContent } from "@/components/ui/card"
import { FileText, Zap, DollarSign } from "lucide-react"

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Simule e Contrate",
    description: "Faça uma simulação gratuita com sua conta de luz e contrate o plano ideal para você.",
  },
  {
    icon: Zap,
    number: "02",
    title: "Ativação Automática",
    description: "Em até 48h sua cota de energia solar é ativada automaticamente na distribuidora.",
  },
  {
    icon: DollarSign,
    number: "03",
    title: "Economia na Conta",
    description: "A partir do próximo mês você já vê a economia direto na sua conta de luz.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Como funciona?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Em apenas 3 passos simples você já está economizando na sua conta de luz
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-0 shadow-lg relative">
              <CardContent className="p-8 text-center">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-lg font-bold">
                  {step.number}
                </div>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </CardContent>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-green-200"></div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
