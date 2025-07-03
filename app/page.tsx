import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import CivilEngineering from "@/components/civil-engineering"
import ClientsPreview from "@/components/clients-preview"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <CivilEngineering />
      <ClientsPreview />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
