export function JaProporcionamos() {
  return (
    <section id="ja-proporcionamos" className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold leading-tight">
              Já proporcionamos
              <br />
              <span className="text-yellow-300">+R$ 1 Bilhão em economia</span>
              <br />
              para nossos clientes, desde a nossa fundação
            </h2>
            <p className="text-xl text-orange-100">
              Milhares de famílias e empresas já economizam com energia solar por assinatura
            </p>
          </div>

          <div className="relative">
            <div className="aspect-video bg-black/20 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/6Yfxitb5wk8"
                title="Matrix Energia - A energia que te movimenta"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
