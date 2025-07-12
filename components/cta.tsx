import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calculator } from "lucide-react"

export function CTA() {
  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-green-600 to-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-0 shadow-2xl">
          <CardContent className="p-12 text-center">
            <Calculator className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Pronto para economizar?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Faça uma simulação gratuita agora e descubra quanto você pode economizar na sua conta de luz com energia
              solar por assinatura.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                Simular Economia Grátis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-green-600 border-green-600 hover:bg-green-50"
              >
                Falar com Especialista
              </Button>
            </div>

            <div className="text-sm text-gray-500">
              ✓ Simulação 100% gratuita • ✓ Sem compromisso • ✓ Resultado na hora
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
