import AnimateOnScroll from "@/components/animations/animate-on-scroll"
import StaggerChildren from "@/components/animations/stagger-children"
import Image from "next/image"

export default function Clients() {
  const clients = [
    {
      name: "Instituto de Estudos Brasileiros - USP",
      logo: "IEB",
      sector: "Educação",
    },
    {
      name: "Faculdade de Ciências Farmacêuticas - USP",
      logo: "FCF",
      sector: "Educação",
    },
    {
      name: "Museu de Arte Contemporânea - USP",
      logo: "MAC",
      sector: "Museu",
    },
    {
      name: "Museu da Imagem e do Som",
      logo: "MIS",
      sector: "Museu",
    },
    {
      name: "Museu de Arte Contemporânea de Campinas",
      logo: "MACC",
      sector: "Museu",
    },
    {
      name: "Museu da Imigração do Estado de São Paulo",
      logo: "MI",
      sector: "Museu",
    },
    {
      name: "Museu do Ipiranga - USP",
      logo: "Ipiranga",
      sector: "Museu",
    },
    {
      name: "Museu de Anatomia Veterinária - FMVZ/USP",
      logo: "FMVZ",
      sector: "Educação",
    },
    {
      name: "Clé - Reserva Contemporânea",
      logo: "Clé",
      sector: "Arte",
    },
  ]

  return (
    <section id="clientes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fadeInUp" className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nossos Clientes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Confiança de instituições renomadas e museus de prestígio nacional
          </p>
        </AnimateOnScroll>

        {/* Imagem com todos os logos */}
        <AnimateOnScroll animation="scaleIn" delay={200} className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <Image
              src="/images/clients-logos.png"
              alt="Logos dos principais clientes da Sena Engenharia"
              width={800}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </AnimateOnScroll>

        {/* Grid de clientes com categorias */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <AnimateOnScroll animation="fadeInLeft" delay={300}>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Museus</h3>
                <p className="text-gray-600 mb-4">Climatização especializada para preservação de acervos</p>
                <div className="text-3xl font-bold text-teal-600">6+</div>
                <div className="text-sm text-gray-500">Museus atendidos</div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInUp" delay={400}>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Universidades</h3>
                <p className="text-gray-600 mb-4">Soluções para instituições de ensino superior</p>
                <div className="text-3xl font-bold text-teal-600">USP</div>
                <div className="text-sm text-gray-500">Parceria consolidada</div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInRight" delay={500}>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Arte & Cultura</h3>
                <p className="text-gray-600 mb-4">Preservação de patrimônio cultural e artístico</p>
                <div className="text-3xl font-bold text-teal-600">100%</div>
                <div className="text-sm text-gray-500">Satisfação garantida</div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Destaques */}
        <AnimateOnScroll animation="fadeInUp" delay={600}>
          <div className="bg-teal-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Referência em Climatização Museológica</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Nossa expertise em climatização para museus e instituições culturais é reconhecida pelas principais
                instituições do país, incluindo museus da USP e importantes centros culturais.
              </p>
            </div>

            <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={100}>
              <div className="text-center p-4 bg-white rounded-xl">
                <div className="text-2xl font-bold text-teal-600 mb-1">9+</div>
                <div className="text-sm text-gray-600">Clientes Ativos</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl">
                <div className="text-2xl font-bold text-teal-600 mb-1">USP</div>
                <div className="text-sm text-gray-600">Parceria Estratégica</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl">
                <div className="text-2xl font-bold text-teal-600 mb-1">SP</div>
                <div className="text-sm text-gray-600">Estado de São Paulo</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl">
                <div className="text-2xl font-bold text-teal-600 mb-1">8+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
            </StaggerChildren>
          </div>
        </AnimateOnScroll>

        {/* Call to Action */}
        <AnimateOnScroll animation="fadeInUp" delay={700} className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Junte-se a essas instituições renomadas e garante a melhor climatização para seu projeto
          </p>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300">
            Solicitar Orçamento
          </button>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
