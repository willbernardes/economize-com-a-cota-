import { Card, CardContent } from "@/components/ui/card"
import { Zap, DollarSign, Leaf, Shield, Clock, Users } from "lucide-react"

const benefits = [
  {
    icon: DollarSign,
    title: "Economia Garantida",
    description: "Até 30% de desconto na sua conta de luz todos os meses, sem surpresas.",
  },
  {
    icon: Zap,
    title: "Sem Instalação",
    description: "Não precisa instalar painéis solares. A energia vem direto na sua conta.",
  },
  {
    icon: Leaf,
    title: "100% Sustentável",
    description: "Energia limpa e renovável que ajuda a preservar o meio ambiente.",
  },
  {
    icon: Shield,
    title: "Sem Riscos",
    description: "Cancele quando quiser. Sem multas, sem complicações.",
  },
  {
    icon: Clock,
    title: "Rápido e Fácil",
    description: "Ativação em até 48h após a contratação. Simples assim.",
  },
  {
    icon: Users,
    title: "Suporte Especializado",
    description: "Equipe dedicada para tirar suas dúvidas e te ajudar sempre.",
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Por que escolher a CotaFácil?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra todos os benefícios de ter energia solar por assinatura
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
