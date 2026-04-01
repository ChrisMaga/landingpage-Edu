import { FaRegEnvelope } from "react-icons/fa"

          export default function ButtonForm() {
    return (
       <div className="flex items-center justify-center gap-3 md:gap-4 pt-6 sm:pt-3 md:pt-5 px-4 lg:px-0">
          
          <a 
            href="#contatos"
            className="flex items-center justify-center gap-3 text-primary border pt-2 hover:border-primary hover:text-primary font-medium text-sm sm:text-lg px-6 sm:px-8 py-3 md:py-4 rounded-full transition-all duration-100 hover:shadow-lg font-poppins text-center"
          >
            <FaRegEnvelope className="w-5 h-5 shrink-0" />
            AGENDAR UMA REUNIÃO
          </a>
</div>
    );
}