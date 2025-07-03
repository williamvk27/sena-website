import ClientCard from "@/components/client-card"

export default function TesteCardsPage() {
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
    {
      name: "Biblioteca Central - UNICAMP",
      sector: "Educação",
      service: "Controle Ambiental",
      period: "2021-2023",
      description: "Sistema de climatização para preservação de acervo bibliográfico raro",
    },
    {
      name: "Indústria Farmacêutica XYZ",
      sector: "Indústria",
      service: "Climatização Industrial",
      period: "2023-2024",
      description: "Controle rigoroso de temperatura e umidade para produção farmacêutica",
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header da página */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Teste - Cards de Clientes</h1>
          <p className="text-gray-600">Visualização dos novos cards com espaço para logo do cliente</p>
        </div>
      </div>

      {/* Grid de cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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

          {/* Seção de exemplo com logo personalizado */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">Exemplo com Logo Personalizado</h2>
            <div className="max-w-md mx-auto">
              <ClientCard
                name="Museu de Arte Contemporânea - USP"
                sector="Museu"
                service="Climatização Museológica"
                period="2019-2024"
                logo="/placeholder.svg?height=80&width=80&text=MAC-USP"
                description="Maior vitrine climatizada da América Latina com tecnologia de ponta para preservação de acervo artístico"
              />
            </div>
          </div>

          {/* Variações de tamanho */}
          <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">Diferentes Layouts</h2>

            {/* Layout em 2 colunas */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <ClientCard
                name="Museu Nacional de Belas Artes"
                sector="Museu"
                service="Sistema Completo de Climatização"
                period="2020-2024"
                description="Projeto completo incluindo monitoramento 24/7 e manutenção preventiva para preservação de obras históricas"
              />
              <ClientCard
                name="Centro de Pesquisa Avançada"
                sector="Educação"
                service="Laboratórios Climatizados"
                period="2022-2024"
                description="Controle preciso de ambiente para pesquisas científicas"
              />
            </div>

            {/* Layout em 1 coluna (mais largo) */}
            <div className="max-w-2xl mx-auto">
              <ClientCard
                name="Complexo Hospitalar São Paulo"
                sector="Hospital"
                service="Climatização de Ambientes Críticos"
                period="2023-2024"
                description="Sistema integrado de climatização para UTIs, centros cirúrgicos e laboratórios com controle rigoroso de qualidade do ar, temperatura e umidade, garantindo segurança máxima para pacientes e profissionais"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
