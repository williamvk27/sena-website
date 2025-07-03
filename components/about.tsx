import { CheckCircle, Users, Award, Leaf } from "lucide-react"

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Bem-vindo à Sena Engenharia</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma empresa comprometida com soluções sustentáveis e tecnologia de ponta
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Nossa História</h3>
            <p className="text-gray-600 mb-6">
              Com mais de 8 anos de experiência no mercado, a Sena Engenharia é uma empresa especializada em soluções
              sustentáveis de energia solar, climatização e manutenção preventiva e corretiva de ar condicionado.
            </p>
            <p className="text-gray-600 mb-6">
              Atuamos em diversos segmentos como museus, galerias, bibliotecas, hospitais e indústrias, sempre com o
              compromisso de oferecer soluções personalizadas e integradas para nossos clientes.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Equipamentos de última geração</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Equipe técnica altamente capacitada</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Soluções personalizadas</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-teal-50 rounded-xl">
              <Users className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">8+</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </div>
            <div className="text-center p-6 bg-teal-50 rounded-xl">
              <Award className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
              <div className="text-gray-600">Projetos Realizados</div>
            </div>
            <div className="text-center p-6 bg-teal-50 rounded-xl col-span-2">
              <Leaf className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <div className="text-lg font-semibold text-gray-900 mb-2">Compromisso Sustentável</div>
              <div className="text-gray-600">Energia limpa e preservação ambiental</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
