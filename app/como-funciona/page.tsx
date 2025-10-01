import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Image from "next/image"
import Link from "next/link"

export default function ComoFuncionaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-[#FF6B00] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white mb-4 mt-8 md:mt-12">
                Como Funciona a Energia por Assinatura
              </h1>
              <p className="font-bold text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-4">
                Entenda a Energia por Assinatura
              </p>
              <div className="bg-white/10 border border-white/20 rounded-xl p-6 shadow-lg mb-8">
                <h3 className="text-white text-2xl font-bold mb-2">Milhares já economizam com energia por assinatura.</h3>
                <p className="text-white/90 md:text-lg leading-relaxed">
                  Com a Matrix, você paga menos pela mesma energia — sem instalação e sem burocracia.
                </p>
                <ul className="mt-4 space-y-2 text-white/90">
                  <li>• Até 30% de economia recorrente</li>
                  <li>• Ativação rápida e 100% online</li>
                  <li>• Sem investimento inicial</li>
                </ul>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link href="/#simulacao" className="inline-flex items-center justify-center bg-white text-[#FF6B00] font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors">
                    Simular economia em 1 minuto
                  </Link>
                  <a
                    href="https://wa.me/5534998331507?text=Ol%C3%A1%20Matrix!%20Vim%20do%20site%20(Como%20Funciona%20-%20Bloco%20Explicativo).%20Quero%20saber%20mais%20sobre%20energia%20por%20assinatura."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-white/15 hover:bg-white/25 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                  >
                    Tirar dúvidas no WhatsApp
                  </a>
                </div>
                <p className="mt-3 text-xs text-orange-100">Válido para residências, comércios e indústrias.</p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="mt-8 md:mt-12">
                <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Assista ao vídeo abaixo para entender melhor como funciona:</h2>
                <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/u_Uywe4lUo0?rel=0&modestbranding=1"
                    title="Como Funciona a Energia por Assinatura da Matrix"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processo Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            O Processo em 5 Etapas Simples
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Image
              src="/images/como-funciona-energia-assinatura.png"
              alt="Como funciona a energia por assinatura - Processo completo em 5 etapas"
              width={800}
              height={500}
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="assine-agora" className="py-16 bg-[#FF6B00] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Comece a economizar hoje mesmo!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Faça parte dos milhares de clientes que já estão economizando na conta de luz.
          </p>
          <Link 
            href="/#simulacao"
            className="inline-block bg-white text-[#FF6B00] font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Assine Agora
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
