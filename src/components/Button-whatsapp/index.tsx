import { FaWhatsapp } from 'react-icons/fa';

export default function ButtonWhastapp() {
    return (

        <div className="md:pt-5 flex flex-col gap-3 md:gap-5 pt-2 sm:pt-1 px-4 lg:px-3">
            <a
                href="https://wa.me/5511998320101?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20com%20o%20Dr.%20Eduardo%20Macedo."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-linear-to-r from-accent to-accent/40 hover:bg-[#25D366] text-quaternary font-semibold hover:shadow-xl
                text-xs sm:text-lg md:text-xs px-6 sm:px-7 py-3 md:py-4 rounded-full shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-3xl animate-breathe font-heading tracking-wider whitespace-nowrap"
                title="Conversar com Eduardo"
            >
                <FaWhatsapp className="w-5 h-5 shrink-0" />
                <span className="sm:inline uppercase">Conversar com Eduardo</span>
            </a>
        </div>
    )

}
