import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Maria Silva",
    location: "São Paulo, SP",
    text: "Incrível! Minha conta de luz diminuiu R$ 80 por mês. Recomendo para todos!",
    rating: 5,
    savings: "R$ 80/mês",
  },
  {
    name: "João Santos",
    location: "Rio de Janeiro, RJ",
    text: "Processo super fácil e rápido. Em 2 dias já estava economizando.",
    rating: 5,
    savings: "R$ 120/mês",
  },
  {
    name: "Ana Costa",
    location: "Belo Horizonte, MG",
    text: "Sustentável e econômico. Exatamente o que eu procurava!",
    rating: 5,
    savings: "R$ 95/mês",
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">O que nossos clientes dizem</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Milhares de pessoas já estão economizando com a Cota Fácil
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">{testimonial.savings}</div>
                    <div className="text-sm text-gray-500">economia</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
