import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, HardHat, Ruler, FileText, Users, Shield } from "lucide-react"
import AnimateOnScroll from "@/components/animations/animate-on-scroll"
import StaggerChildren from "@/components/animations/stagger-children"

export default function CivilEngineering() {
  const services = [
    {
      icon: <Building className="w-12 h-12 text-teal-600" />,
      title: "Projetos Estruturais",
      description: "Desenvolvimento de projetos estruturais completos para edificações residenciais e comerciais",
      features: ["Cálculo estrutural", "Dimensionamento", "Detalhamento", "ART inclusa"],
    },
    {
      icon: <HardHat className="w-12 h-12 text-teal-600" />,
      title: "Acompanhamento de Obra",
      description: "Supervisão técnica e acompanhamento de execução de projetos",
      features: ["Fiscalização", "Controle de qualidade", "Relatórios técnicos", "Cronograma"],
    },
    {
      icon: <Ruler className="w-12 h-12 text-teal-600" />,
      title: "Projetos Arquitetônicos",
      description: "Elaboração de projetos arquitetônicos funcionais e estéticos",
      features: ["Plantas baixas", "Cortes e fachadas", "Projeto legal", "Projeto executivo"],
    },
    {
      icon: <FileText className="w-12 h-12 text-teal-600" />,
      title: "Laudos e Perícias",
      description: "Elaboração de laudos técnicos e perícias de engenharia",
      features: ["Laudo estrutural", "Perícia técnica", "Vistoria predial", "Relatório fotográfico"],
    },
    {
      icon: <Users className="w-12 h-12 text-teal-600" />,
      title: "Consultoria Técnica",
      description: "Consultoria especializada em engenharia civil e estrutural",
      features: ["Análise técnica", "Parecer técnico", "Orientação profissional", "Suporte especializado"],
    },
    {
      icon: <Shield className="w-12 h-12 text-teal-600" />,
      title: "Regularização",
      description: "Regularização de obras e documentação técnica",
      features: ["Habite-se", "Regularização predial", "Documentação CREA", "Aprovação prefeitura"],
    },
  ]

  const differentials = [
    "Mais de 8 anos de experiência no mercado",
    "Equipe técnica qualificada e experiente",
    "Projetos desenvolvidos com tecnologia BIM",
    "Atendimento personalizado e consultivo",
    "Cumprimento rigoroso de prazos",
    "Preços competitivos e transparentes",
  ]

  return (
    <section id="engenharia-civil" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fadeInUp" className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Engenharia Civil</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas em engenharia civil com qualidade, segurança e inovação
          </p>
        </AnimateOnScroll>

        {/* Serviços */}
        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20" staggerDelay={150}>
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-teal-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </StaggerChildren>

        {/* Diferenciais */}
        <AnimateOnScroll animation="scaleIn" delay={300}>
          <div className="bg-teal-50 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <AnimateOnScroll animation="fadeInLeft" delay={500}>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossos Diferenciais</h3>
                  <p className="text-gray-600 mb-6">
                    A Sena Engenharia se destaca no mercado de engenharia civil pela excelência técnica, inovação e
                    compromisso com a qualidade em todos os projetos desenvolvidos.
                  </p>
                  <StaggerChildren className="space-y-4" staggerDelay={100}>
                    {differentials.map((differential, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-3 h-3 bg-teal-600 rounded-full mr-4"></div>
                        <span className="text-gray-700">{differential}</span>
                      </div>
                    ))}
                  </StaggerChildren>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fadeInRight" delay={700}>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-600 mb-2">500+</div>
                    <div className="text-gray-600 mb-4">Projetos Executados</div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">100%</div>
                    <div className="text-gray-600 mb-4">Projetos Aprovados</div>
                    <div className="text-lg font-semibold text-teal-600">CREA/SP Regularizado</div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Call to Action */}
        <AnimateOnScroll animation="fadeInUp" delay={600} className="text-center mt-16">
          <div className="bg-gray-900 text-white rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Precisa de um Projeto de Engenharia Civil?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para desenvolver seu projeto com qualidade, segurança e dentro do prazo. Solicite
              um orçamento sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300">
                Solicitar Orçamento
              </button>
              <button className="border border-gray-600 hover:border-teal-400 text-white hover:text-teal-400 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300">
                Ver Portfólio
              </button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
