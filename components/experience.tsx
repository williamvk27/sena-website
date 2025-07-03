import { Badge } from "@/components/ui/badge"
import { Building2, BookOpen, Factory } from "lucide-react"
import AnimateOnScroll from "@/components/animations/animate-on-scroll"
import StaggerChildren from "@/components/animations/stagger-children"

export default function Experience() {
  const segments = [
    { icon: <Building2 className="w-8 h-8" />, name: "Museus", color: "bg-blue-100 text-blue-800" },
    { icon: <BookOpen className="w-8 h-8" />, name: "Bibliotecas", color: "bg-green-100 text-green-800" },
    { icon: <Building2 className="w-8 h-8" />, name: "Hospitais", color: "bg-red-100 text-red-800" },
    { icon: <Factory className="w-8 h-8" />, name: "Indústrias", color: "bg-purple-100 text-purple-800" },
  ]

  return (
    <section id="experiencia" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fadeInUp" className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nossa Experiência</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Atendemos diversos segmentos com excelência e tecnologia
          </p>
        </AnimateOnScroll>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16" staggerDelay={100}>
          {segments.map((segment, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl border hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="text-teal-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {segment.icon}
              </div>
              <Badge className={segment.color}>{segment.name}</Badge>
            </div>
          ))}
        </StaggerChildren>

        <AnimateOnScroll animation="scaleIn" delay={300}>
          <div className="bg-teal-50 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <AnimateOnScroll animation="fadeInLeft" delay={500}>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Destaque em Climatização Museológica</h3>
                  <p className="text-gray-600 mb-6">
                    Somos reconhecidos pela excelência em climatização museológica, oferecendo soluções de alta
                    tecnologia para a preservação adequada de acervos culturais e históricos.
                  </p>
                  <StaggerChildren className="space-y-4" staggerDelay={100}>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-teal-600 rounded-full mr-4"></div>
                      <span className="text-gray-700">Museu de Arte Contemporânea</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-teal-600 rounded-full mr-4"></div>
                      <span className="text-gray-700">Maior vitrine climatizada da América Latina</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-teal-600 rounded-full mr-4"></div>
                      <span className="text-gray-700">Preservação de acervos históricos</span>
                    </div>
                  </StaggerChildren>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInRight" delay={700}>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-600 mb-2">100%</div>
                    <div className="text-gray-600 mb-4">Satisfação dos Clientes</div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">8+</div>
                    <div className="text-gray-600">Anos de Experiência</div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
