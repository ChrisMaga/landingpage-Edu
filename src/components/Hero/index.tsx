'use client';

import Image from "next/image";
import { FaWhatsapp, FaRegEnvelope } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";

export default function Hero() {
  return (
    <section id="hero" className="min-h-[80vh] md:min-h-[40vh] 
    bg-linear-to-br from-primary via-secondary to-primary flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 md:px-20 pt-12 md:pt-4 md:pb-3 relative overflow-hidden font-poppins">

      {/* Marca d'água: Logo central (aumentei opacidade e z-index) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"> {/* z-0 mais baixo */}
        <Image
          src="/monogramaDark.svg"
          alt="Logo marca d'água"
          width={150}
          height={45}
          className=" w-102 h-100 sm:w-110 sm:h-102 md:w-lg md:h-104 lg:w-xl lg:h-100 object-contain mix-blend-multiply"
        />
      </div>
<div className="md:grid md:grid-cols-2">

      {/* Conteúdo texto (centralizado mobile, esquerdo desktop) */}
      <div className="relative z-20 w-full max-w-2xl text-center lg:text-center lg:pr-12 space-y-6 md:space-y-8 flex-1 order-1 lg:order-0 md:pb-8 md:pl-5 lg:pt-20">
        <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl font-semibold font-merriweather text-white leading-tight md:mt-4">
          Seus direitos merecem uma defesa que não recua.
        </h1>
        <p className="text-lg font-roboto sm:text-xl md:text-xl text-quaternary leading-relaxed px-4 lg:px-0 ">
          Serviço jurídico completo e personalizado, guiado pela ética, transparência e expertise, com soluções estratégicas para garantir seus direitos.
        </p>
        <p className="flex items-center justify-center gap-2 text-base font-roboto sm:text-lg md:text-sm text-quaternary font-medium md:pb-1 md:mb-2 px-4 lg:px-0">
          <LuMapPin className="w-5 h-5 shrink-0" />
          Atendimento presencial e online em todo estado de SP
        </p>

        {/* Botões (stacked mobile) */}
        <div className="flex flex-col gap-3 md:gap-5 pt-2 sm:pt-1 md:pt-2 px-4 lg:px-3">
          {/* Botão 1: Ícone WhatsApp + Animação "pra frente e pra trás" (scale 1 → 1.05 → 1) */}
          <a
            href="https://wa.me/5511998320101?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20com%20o%20Dr.%20Eduardo%20Macedo."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-linear-to-r from-tertiary to-quaternary text-primary font-semibold uppercase text-xs sm:text-lg md:text-xs px-6 sm:px-7 py-3 md:py-4 rounded-full shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-3xl animate-breathe font-poppins tracking-wider whitespace-nowrap" // + whitespace-nowrap
          >

            <FaWhatsapp className="w-5 h-5 shrink-0" />
            CONVERSAR COM EDUARDO
          </a>

          {/* Botão 2: Contato por formulário */}

          <a
            href="#contatos"
            className="flex items-center justify-center gap-3 text-quaternary hover:border-3 hover:border-quaternary hover:text-quaternary font-medium text-sm sm:text-lg md:text-sm x-6 sm:px-8 py-3 md:py-4 rounded-full transition-all duration-100 hover:shadow-lg font-poppins text-center"
          >
            <FaRegEnvelope className="w-5 h-5 shrink-0" />
            AGENDAR UMA REUNIÃO
          </a>
        </div>
      </div>

      {/* Imagem direita (centralizada horizontalmente + rente ao fundo da section) */}
      <div className="relative z-20 w-full order-2 lg:order-0 flex  items-end md:items-end lg:items-end justify-end px-4 lg:px-0"> {/* items-end rente embaixo + justify-center centraliza */}
        <Image
          src="/hero-image.png"
          alt="Advogado"
          width={1024}
          height={1024}
          className="w-full max-w-lg sm:max-w-xl md:max-w-2xl h-auto max-h-[50vh] sm:max-h-[60vh] md:max-h-[70vh] lg:max-h-[85vh] drop-shadow-2xl mx-auto"
          priority
        />
      </div>

      </div>
    </section>
  );
}