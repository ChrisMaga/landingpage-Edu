import BackgroundLight from "../BackgroundLight";
import { LuClock, LuFileCheck, LuMapPin } from "react-icons/lu";
import { RiHeadphoneLine, RiGroupLine } from "react-icons/ri";




export default function ChooseMe() {

    // array para os motivos de escolher o advogado
    const specials = [
        {
            icon: RiHeadphoneLine,
            desc: "Nada linguagem difícil. Explico tudo de um jeito que você realmente entende o que está acontecendo no seu caso.",
        },
        {
            icon: LuClock,
            desc: "Sei que você precisa de uma resposta rápida. Trabalho para que seu caso ande o mais rápido possível. ",
        },
        {
            icon: LuFileCheck,
            desc: "Você acompanha cada etapa do seu processo. Sem surpresas, sem letras miúdas.",
        },
        {
            icon: RiGroupLine,
            desc: "Meu compromisso é com o seu resultado. Só ganho quando você ganha.",
        },
        {
            icon: LuMapPin,
            desc: "Atendo você onde for mais conveniente: no escritório ou por vídeochamada, sem precisar sair de casa. Você escolhe.",
        }
    ];

    return (
        <section id="choose-me" className="min-h-[80vh] md:min-h-[60vh] bg-quaternary/10 relative overflow-hidden font-poppins pl-6 pr-6 md:px-10 lg:px-20 py-20">
            <BackgroundLight />

            {/* Título, subtítulo (centralizado como Hero) */}
            <div className="relative z-20 flex flex-col justify-center items-center gap-4 text-center max-w-4xl mx-auto mb-16 md:mb-20">
                <p className="text-secondary uppercase font-semibold md:text-2xl tracking-wider">
                    Porque me escolher?
                </p>
                <h2 className="text-primary font-merriweather font-semibold text-3xl md:text-5xl leading-tight">
                    Advocacia de verdade, do seu lado
                </h2>
            </div>

            {/* Motivos (grid responsivo) */}
            <div className="relative z-20 flex flex-col flex-wrap md:flex-nowrap align-center justify-center gap-2 md:gap-10 max-w-6xl mx-auto px-4 md:flex-row">
                {specials.map((special, index) => (
                    <div key={index} className="group p-6 md:p-8 flex flex-col items-center text-center gap-4 h-full">
                        <special.icon className="w-12 h-12 md:w-16 md:h-16 text-secondary group-hover:scale-110 transition-all duration-300" />
                        
                        <p className="text-secondary font-roboto text-sm md:text-base leading-relaxed">{special.desc}</p>
                        
                    </div>
                ))}
            </div>

        </section>
    )
}