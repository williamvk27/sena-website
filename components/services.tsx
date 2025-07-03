import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wind, Wrench, Building, Sun, HardHat } from "lucide-react"
import AnimateOnScroll from "@/components/animations/animate-on-scroll"
import StaggerChildren from "@/components/animations/stagger-children"

export default function Services() {
  const services = [
    {
      icon: <Sun className="w-12 h-12 text-teal-600" />,
      title: "Energia Solar",
      description: "Instalação, manutenção e monitoramento de sistemas fotovoltaicos completos",
      features: ["Instalação completa", "Monitoramento 24/7", "Manutenção preventiva", "Energia limpa"],
    },
    {
      icon: <Wind className="w-12 h-12 text-teal-600" />,
      title: "Climatização",
      description: "Soluções especializadas para ambientes sensíveis e críticos",
      features: ["Museus e galerias", "Hospitais", "Bibliotecas", "Ambientes industriais"],
    },
    {
      icon: <Wrench className="w-12 h-12 text-teal-600" />,
      title: "Manutenção",
      description: "Serviços preventivos e corretivos com equipe técnica especializada",
      features: ["Manutenção preventiva", "Correção de falhas", "Equipe capacitada", "Atendimento rápido"],
    },
    {
      icon: <Building className="w-12 h-12 text-teal-600" />,
      title: "Climatização Museológica",
      description: "Tecnologia de ponta para preservação de acervos culturais e históricos",
      features: ["Alta tecnologia", "Preservação de acervos", "Controle preciso", "Maior vitrine da América Latina"],
    },
    {
      icon: <HardHat className="w-12 h-12 text-teal-600" />,
      title: "Engenharia Civil",
      description: "Projetos estruturais, arquitetônicos e consultoria técnica especializada",
      features: ["Projetos estruturais", "Acompanhamento de obra", "Laudos técnicos", "Regularização"],
    },
  ]

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fadeInUp" className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas e personalizadas para cada necessidade
          </p>
        </AnimateOnScroll>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8" staggerDelay={150}>
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription className="text-sm">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-600">
                      <div className="w-2 h-2 bg-teal-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
