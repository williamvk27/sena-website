import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wind, Wrench, Building, Sun } from "lucide-react"

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
  ]

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas e personalizadas para cada necessidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
