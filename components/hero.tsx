import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Wind, Wrench } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="inicio" className="bg-gradient-to-br from-teal-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Soluções Sustentáveis em <span className="text-teal-600">Energia Solar</span> e{" "}
              <span className="text-teal-600">Climatização</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Mais de 8 anos de experiência oferecendo tecnologia de ponta para museus, hospitais, indústrias e diversos
              segmentos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#formContact">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              </Link>
              <Button variant="outline" size="lg">
                Nossos Projetos
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Zap className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Energia Solar</h3>
              <p className="text-gray-600 text-sm">Sistemas fotovoltaicos completos</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Wind className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Climatização</h3>
              <p className="text-gray-600 text-sm">Soluções especializadas</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg col-span-2">
              <Wrench className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Manutenção</h3>
              <p className="text-gray-600 text-sm">Preventiva e corretiva com equipe especializada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
