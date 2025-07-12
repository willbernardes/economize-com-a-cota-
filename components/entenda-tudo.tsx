import { Card, CardContent } from "@/components/ui/card"
import { Leaf, CreditCard, Award, Shield, CheckCircle, Users } from "lucide-react"
import Image from "next/image"

const benefits = [
  {
    icon: Leaf,
    title: "Sustentável",
    description: "Ajude o planeta sendo um consumidor de energia renovável",
    color: "text-green-500",
  },
  {
    icon: CreditCard,
    title: "Simples e digital",
    description: "Controle de forma rápida e segura, sem precisar sair de casa",
    color: "text-blue-500",
  },
  {
    icon: Award,
    title: "Economia garantida",
    description: "Economize todo mês até 20% na sua conta de luz, sem pagar nada",
    color: "text-orange-500",
  },
  {
    icon: Shield,
    title: "Sem fidelidade",
    description: "Tenha liberdade para cancelar quando quiser. De forma fácil, sem taxas ou multas",
    color: "text-purple-500",
  },
  {
    icon: CheckCircle,
    title: "Sem risco",
    description: "Nada muda! Sua distribuidora continua sendo a responsável por levar sua energia até você",
    color: "text-green-500",
  },
  {
    icon: Users,
    title: "Suporte completo",
    description: "Equipe especializada para te ajudar em todas as etapas do processo",
    color: "text-blue-500",
  },
]

export function EntendaTudo() {
  return (
    <section id="entenda-tudo" className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="relative mb-12">
            <Image
              src="/images/entenda-tudo.png"
              alt="Entenda tudo de forma clara e transparente"
              width={1200}
              height={400}
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <div className="mb-4">
                    <item.icon className={`w-12 h-12 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
