import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Specials from "@/components/Special";
import Footer from "@/components/Footer";
import ChooseMe from "@/components/ChooseMe";
import Local from "@/components/Local";
import Differences from "@/components/Differences";
import Contatos from "@/components/Contact/Contatos";
import ScrollToTop from "@/components/ScrollToTop";


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
          <Contatos />
          <Local />
          <Footer />
          <ScrollToTop />

        </div>
    </main>
  );
}