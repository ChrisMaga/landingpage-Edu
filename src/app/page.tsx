import Navbar from "../components/Navbar"; // Seu Navbar TSX
import Hero from "../components/Hero"; // Seu Hero TSX
import Specials from "@/components/Special";
import Footer from "@/components/Footer";
import ChooseMe from "@/components/ChooseMe";


export default function Home() {
  return (
    <main>
      <Navbar />      
      <Hero />
      <Specials />
      {/* Próximas seções: */}      
      <section id="diferenciais" className="py-20 bg-primary text-white">...</section>
      <ChooseMe />
      <section id="contato" className="py-20 bg-primary"> {/* CTA esquerdo + form direito */}...</section>
      <section id="localizacao" className="py-20"> {/* Endereço + mapa */}...</section>
      <Footer />
    </main>
  );
}