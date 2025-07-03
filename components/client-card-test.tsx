import ClientCard from "./client-card"

export default function ClientCardTest() {
  const testClients = [
    {
      name: "Museu de Arte Contemporânea de Campinas",
      sector: "Museu",
      service: "Preservação de Acervo",
      period: "2022-2024",
      description: "Sistema de climatização especializado para preservação de obras de arte contemporânea",
    },
    {
      name: "Instituto de Estudos Brasileiros - USP",
      sector: "Educação",
      service: "Climatização Especializada",
      period: "2020-2024",
      description: "Controle ambiental para biblioteca e arquivo histórico",
    },
    {
      name: "Museu da Imagem e do Som",
      sector: "Museu",
      service: "Sistema de Climatização",
      period: "2021-2024",
      description: "Preservação de acervo audiovisual com controle rigoroso de temperatura e umidade",
    },
    {
      name: "Hospital das Clínicas",
      sector: "Hospital",
      service: "Climatização Hospitalar",
      period: "2023-2024",
      description: "Sistema de ar condicionado para ambientes críticos e salas cirúrgicas",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Teste - Cards de Clientes</h2>
          <p className="text-gray-600">Visualização dos novos cards com espaço para logo</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testClients.map((client, index) => (
            <ClientCard
              key={index}
              name={client.name}
              sector={client.sector}
              service={client.service}
              period={client.period}
              description={client.description}
            />
          ))}
        </div>

        {/* Exemplo com logo personalizado */}
        <div className="mt-12 max-w-md mx-auto">
          <h3 className="text-xl font-semibold text-center mb-4">Exemplo com Logo</h3>
          <ClientCard
            name="Museu de Arte Contemporânea - USP"
            sector="Museu"
            service="Climatização Museológica"
            period="2019-2024"
            logo="/placeholder.svg?height=80&width=80&text=MAC"
            description="Maior vitrine climatizada da América Latina com tecnologia de ponta"
          />
        </div>
      </div>
    </section>
  )
}
