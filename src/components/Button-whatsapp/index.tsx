import { FaWhatsapp } from 'react-icons/fa';

export default function ButtonWhastapp() {
    return (

        <div className='md:pt-5 flex flex-col gap-3 md:gap-5 pt-2 sm:pt-1 px-4 lg:px-3"'>
            <a
                href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20conversar%20com%20um%20advogado!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-linear-to-r from-accent to-accent/40 hover:bg-[#25D366] text-quaternary font-semibold hover:shadow-xl
                text-xs sm:text-lg md:text-xs px-6 sm:px-7 py-3 md:py-4 rounded-full shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-3xl animate-breathe font-poppins tracking-wider whitespace-nowrap"
                title="Conversar com Advogado"
            >
                <FaWhatsapp className="w-5 h-5 shrink-0" />
                <span className="sm:inline uppercase">Quero conversar com Advogado</span>
            </a>
        </div>
    )

}
