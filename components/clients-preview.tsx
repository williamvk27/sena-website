import AnimateOnScroll from "@/components/animations/animate-on-scroll"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ClientsPreview() {
  return (
    <section id="clientes-preview" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fadeInUp" className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nossos Clientes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Confiança de instituições renomadas e museus de prestígio nacional
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scaleIn" delay={200}>
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            {/* Grid com logos principais */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-700">MAC</div>
                <div className="text-xs text-gray-500">Museu de Arte</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-700">USP</div>
                <div className="text-xs text-gray-500">Universidade</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-700">MIS</div>
                <div className="text-xs text-gray-500">Museu Imagem</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-700">IEB</div>
                <div className="text-xs text-gray-500">Instituto</div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Estatísticas rápidas */}
        <AnimateOnScroll animation="fadeInUp" delay={400}>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 bg-teal-50 rounded-xl">
              <div className="text-3xl font-bold text-teal-600 mb-1">9+</div>
              <div className="text-sm text-gray-600">Clientes Ativos</div>
            </div>
            <div className="text-center p-4 bg-teal-50 rounded-xl">
              <div className="text-3xl font-bold text-teal-600 mb-1">6+</div>
              <div className="text-sm text-gray-600">Museus</div>
            </div>
            <div className="text-center p-4 bg-teal-50 rounded-xl">
              <div className="text-3xl font-bold text-teal-600 mb-1">USP</div>
              <div className="text-sm text-gray-600">Parceria</div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Call to Action */}
        <AnimateOnScroll animation="fadeInUp" delay={600} className="text-center">
          <Link href="/clientes">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
              Ver Todos os Clientes
            </Button>
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
