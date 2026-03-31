import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Specials from "@/components/Special";
import Footer from "@/components/Footer";
import ChooseMe from "@/components/ChooseMe";
import Local from "@/components/Local";
import Differences from "@/components/Differences";


export default function Home() {
  return (
    <main className="pt-16 md:pt-20">
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Conteúdo expande */}

          <Navbar />
          <Hero />
          <Specials />
          <Differences />
          <ChooseMe />
          <section id="contato" className="py-20 bg-primary"> {/* CTA esquerdo + form direito */}...</section>
          <Local />
          <Footer />

        </div>
    </main>
  );
}