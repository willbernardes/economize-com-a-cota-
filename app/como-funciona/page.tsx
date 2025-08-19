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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Como Funciona a Energia por Assinatura
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Economize na sua conta de luz com um sistema de energia solar simples, sem burocracia e sem custos de instalação.
              </p>
              <Link 
                href="#assine-agora"
                className="inline-block bg-[#FF6B00] text-white font-semibold px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Assine Agora
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    className="w-full h-[300px] md:h-[400px]"
                    src="https://www.youtube.com/embed/SEU_VIDEO_ID"
                    title="Como Funciona a Energia por Assinatura"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                  </iframe>
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
