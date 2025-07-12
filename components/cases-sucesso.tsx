import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, Play, TrendingUp, Building, Leaf } from "lucide-react"

const cases = [
  {
    empresa: "Toyota",
    depoimento:
      "A Matrix atende a Toyota fornecendo energia limpa e renovável. Hoje nós temos quatro plantas industriais e todas são atendidas pela Matrix Energia. E para toda essa energia consumida, a Matrix também fornece os certificados de energia renovável - I-RECs.",
    executivo: "Renato Maldonado Simonelli",
    cargo: "Utilidades",
    videoId: "GB4ujPsOakw",
    logo: "/images/logo-toyota.jpeg",
  },
  {
    empresa: "Algar Telecom",
    depoimento:
      "Com essa parceria da Matrix, hoje nós temos o prazer de informar que a Algar Telecom é 100% de Energia Renovável.",
    executivo: "Leovaldo Martins Araújo",
    cargo: "Diretor de Infraestrutura e Engenharia na Algar Telecom",
    videoId: "NgzVSkoPNng",
    logo: "/images/logo-algar.png",
  },
]

export function CasesSucesso() {
  return (
    <section id="cases-sucesso" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 italic italic font-sans font-sans font-normal font-medium font-normal font-thin italic">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Cases de Sucesso</h2>
          <h3 className="text-2xl lg:text-3xl font-semibold text-orange-500 mb-8">
            Empresas que confiam em nossas soluções
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto italic font-bold tracking-normal tracking-tighter tracking-tighter tracking-tight tracking-tighter">
            Grandes empresas já escolheram a energia renovável por assinatura para reduzir custos e impacto ambiental
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {cases.map((caso, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 bg-white rounded-3xl"
            >
              <CardContent className="p-0">
                {/* Header com logo e empresa */}
                <div className="p-4 border-b border-gray-50">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100">
                      <Image
                        src={caso.logo || "/placeholder.svg"}
                        alt={`Logo ${caso.empresa}`}
                        width={60}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900">{caso.empresa}</h4>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-sm font-medium text-green-600">100% Energia Renovável</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vídeo */}
                <div className="relative">
                  <div className="aspect-video bg-gray-900 relative group cursor-pointer">
                    <iframe
                      src={`https://www.youtube.com/embed/${caso.videoId}`}
                      title={`Case de Sucesso - ${caso.empresa}`}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    {/* <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
                        <Play className="w-6 h-6 text-gray-700 ml-1" />
                      </div>
                    </div> */}
                  </div>
                </div>

                {/* Depoimento */}
                <div className="p-6">
                  <div className="relative">
                    <Quote className="absolute -top-1 -left-1 w-6 h-6 text-gray-200" />
                    <blockquote className="text-gray-700 text-lg leading-relaxed pl-6 mb-6 font-bold italic">
                      "{caso.depoimento}"
                    </blockquote>
                  </div>

                  {/* Executivo */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-50">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center border border-gray-200">
                      <span className="text-gray-600 font-semibold text-sm">
                        {caso.executivo
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .substring(0, 2)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{caso.executivo}</p>
                      <p className="text-sm text-gray-500">{caso.cargo}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Seção de logos das empresas */}
        <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-8">
          <h4 className="text-2xl font-semibold text-center text-gray-900 mb-8">
            Mais empresas que confiam na Matrix Energia
          </h4>
          <div className="relative">
            <Image
              src="/images/cases-de-sucesso.png"
              alt="Empresas que confiam em nossas soluções"
              width={1200}
              height={300}
              className="rounded-2xl w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Estatísticas */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center group">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <Building className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-sm font-bold text-white">500+</span>
              </div>
            </div>
            <h5 className="text-2xl font-bold text-gray-900 mb-3">Empresas Atendidas</h5>
            <p className="text-gray-600 font-medium">Grandes corporações já economizam conosco</p>
          </div>

          <div className="text-center group">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-xs font-bold text-white">1B+</span>
              </div>
            </div>
            <h5 className="text-2xl font-bold text-gray-900 mb-3">Em Economia</h5>
            <p className="text-gray-600 font-medium">Mais de R$ 1 bilhão economizado pelos clientes</p>
          </div>

          <div className="text-center group">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <Leaf className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-sm font-bold text-white">100%</span>
              </div>
            </div>
            <h5 className="text-2xl font-bold text-gray-900 mb-3">Energia Limpa</h5>
            <p className="text-gray-600 font-medium">Certificados I-RECs garantem origem renovável</p>
          </div>
        </div>
      </div>
    </section>
  )
}
