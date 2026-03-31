import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Specials from "@/components/Special";
import Footer from "@/components/Footer";
import ChooseMe from "@/components/ChooseMe";
import Local from "@/components/Local";


export default function Home() {
  return (
    <main>
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Conteúdo expande */}

          <Navbar />
          <Hero />
          <Specials />
          {/* Próximas seções: */}
          <section id="diferenciais" className="py-20 bg-primary text-white">...</section>
          <ChooseMe />
          <section id="contato" className="py-20 bg-primary"> {/* CTA esquerdo + form direito */}...</section>
          <Local />
          <Footer />

        </div>
    </main>
  );
}