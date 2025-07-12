import { Phone, Mail, Instagram } from "lucide-react"

export function Contato() {
  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Estamos prontos para ajudar você a economizar na sua conta de luz
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <Phone className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
            <h3 className="text-xl font-semibold mb-2">Telefone</h3>
            <p className="text-orange-100">(47) 99967-8465</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <Mail className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
            <h3 className="text-xl font-semibold mb-2">E-mail</h3>
            <p className="text-orange-100">atendimento@cotafacil.com</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <Instagram className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
            <h3 className="text-xl font-semibold mb-2">Instagram</h3>
            <p className="text-orange-100">@cotafacil.bnu</p>
          </div>
        </div>
      </div>
    </section>
  )
}
