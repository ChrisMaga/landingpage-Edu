import { FaRegEnvelope } from "react-icons/fa"

          export default function ButtonForm() {
    return (
       <div className="flex items-center justify-center gap-3 md:gap-4 pt-6 sm:pt-3 md:pt-5 px-4 lg:px-0">
          
          <a 
            href="#contatos"
            className="flex items-center justify-center gap-3 bg-secondary text-quaternary border-2 border-secondary hover:bg-primary hover:border-quaternary font-semibold uppercase text-xs sm:text-lg md:text-xs px-6 sm:px-8 py-3 md:py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl font-heading tracking-wider text-center whitespace-nowrap"
          >
            <FaRegEnvelope className="w-5 h-5 shrink-0" />
            AGENDAR UMA REUNIÃO
          </a>
</div>
    );
}