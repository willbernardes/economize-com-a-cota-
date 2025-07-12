import Image from "next/image"

export function ComoFuncionaEnergia() {
  return (
    <section id="como-funciona-energia" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="relative max-w-4xl">
            <Image
              src="/images/como-funciona-energia-assinatura.png"
              alt="Como funciona a energia por assinatura - Processo completo em 5 etapas"
              width={800}
              height={500}
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
