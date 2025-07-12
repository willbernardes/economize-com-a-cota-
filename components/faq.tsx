"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqData = [
  {
    question: "Preciso instalar algo?",
    answer:
      "Não! A energia é gerada em usinas solares parceiras e injetada na rede elétrica. Você não precisa instalar nada em sua propriedade.",
  },
  {
    question: "Funciona em qualquer cidade?",
    answer: "Atualmente atendemos em 20 estados do Brasil. Consulte nossa cobertura durante a simulação.",
  },
  {
    question: "Tem fidelidade ou taxa de cancelamento?",
    answer:
      "Não há fidelidade nem taxas de cancelamento. Você pode cancelar quando quiser, de forma simples e sem multas.",
  },
  {
    question: "Posso voltar à conta tradicional depois?",
    answer:
      "Sim! Você pode cancelar a qualquer momento e voltar a receber apenas energia da distribuidora tradicional.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "Você continua pagando sua conta de luz normalmente para a distribuidora, mas com desconto dos créditos de energia solar.",
  },
]

export function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [showContactModal, setShowContactModal] = useState(false)

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Ficou com alguma dúvida?</h2>
          <h3 className="text-2xl lg:text-3xl font-bold text-orange-400 mb-8">
            Entenda tudo de forma clara e transparente
          </h3>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="text-xl font-bold text-white pr-4">{item.question}</span>
                <div className="flex-shrink-0">
                  {openFaq === index ? (
                    <ChevronUp className="w-7 h-7 text-orange-400" />
                  ) : (
                    <ChevronDown className="w-7 h-7 text-orange-400" />
                  )}
                </div>
              </button>
              {openFaq === index && (
                <div className="px-8 pb-6 border-t border-white/10">
                  <p className="text-gray-200 leading-relaxed text-lg font-semibold pt-4">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            onClick={() => setShowContactModal(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Ainda tem dúvidas? Fale conosco
          </Button>
        </div>
      </div>
    </section>
  )
}
