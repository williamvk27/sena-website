import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold text-teal-400">SENA</div>
              <div className="ml-2 text-sm text-gray-300">ENGENHARIA</div>
            </div>
            <p className="text-gray-300 mb-4">
              Soluções sustentáveis em energia solar e climatização com mais de 8 anos de experiência.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/senaengenhariasp" className="text-gray-300 hover:text-teal-400 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.35C0 23.407.593 24 1.325 24H12.82v-9.29h-3.128v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </Link>
              <Link href="https://www.instagram.com/senaengenhariasp/" className="text-gray-300 hover:text-teal-400 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.687.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.667.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
                </svg>
              </Link>
              <Link href="https://www.linkedin.com/company/senaengenhariasp" className="text-gray-300 hover:text-teal-400 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Energia Solar
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Climatização
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Manutenção
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Climatização Museológica
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Segmentos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Museus
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Hospitais
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Bibliotecas
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Indústrias
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-teal-400" />
                <span className="text-gray-300">(11) 5026-4182</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-teal-400" />
                <span className="text-gray-300">contato@senaengenharia.com.br</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">© 2025 Sena Engenharia. Todos os direitos reservados.</p>
          <p className="text-gray-400 text-sm mt-2 flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
                3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
                0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61 
                -.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.084-.729.084-.729 
                1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.304 
                3.495.997.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.335-5.466-5.93 
                0-1.31.47-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
                0 0 1.005-.322 3.3 1.23a11.49 11.49 0 013.003-.404 
                c1.02.005 2.045.138 3.003.404 2.28-1.552 3.285-1.23 
                3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 
                1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 
                5.92.435.375.81 1.096.81 2.215 0 1.6-.015 2.89-.015 
                3.285 0 .315.21.69.825.57C20.565 22.092 24 
                17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            Desenvolvido por
            <Link
              href="https://github.com/williamvk27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 transition-colors hover:underline"
            >
              William vieira
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
