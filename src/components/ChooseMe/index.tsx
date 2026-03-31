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

            <div className="md:grid md:grid-cols-6 md:gap-4">


            </div>


            {/* Título, subtítulo (centralizado como Hero) */}
            <div className="relative z-20 flex flex-col justify-center items-center gap-4 text-center max-w-4xl mx-auto mb-16 md:mb-20">
                <p className="text-secondary uppercase font-semibold md:text-2xl tracking-wider">
                    Porque me escolher?
                </p>
                <h2 className="text-primary font-merriweather font-semibold text-3xl md:text-5xl leading-tight">
                    Advocacia de verdade, do seu lado
                </h2>
            </div>


            {/* Motivos para escolher (grid responsivo: 1col mobile → 2col tablet → 3+2 centralizados desktop) */}
            <div className="relative z-20 flex flex-col sm:flex-wrap lg:flex-col gap-4 md:gap-6 max-w-6xl mx-auto px-4 lg:px-8">
                {/* Linha superior: 3 itens (centralizados em desktop) */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-row justify-center lg:justify-center lg:gap-6 lg:mb-4">
                    {specials.slice(0, 3).map((special, index) => (
                        <div key={index} className="group p-6 md:p-8 flex flex-col items-center text-center gap-4 w-full sm:w-auto lg:w-75 xl:w-85 max-w-sm">
                            {/* Círculo com ícone */}
                            <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-secondary/10 rounded-full flex items-center justify-center p-3 shadow-lg">
                                <special.icon className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-secondary shrink-0" />
                            </div>
                            <p className="text-secondary font-roboto text-sm md:text-base leading-relaxed">{special.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Linha inferior: 2 itens (perfeitamente centralizados em desktop) */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-row justify-center lg:justify-center lg:gap-8 lg:mb-4">
                    {specials.slice(3, 5).map((special, index) => (
                        <div key={index + 3} className="group p-6 md:p-8 flex flex-col items-center text-center gap-4 w-full sm:w-auto lg:w-75 xl:w-85 max-w-sm">
                            {/* Círculo com ícone (mesmo estilo) */}
                            <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-secondary/10 rounded-full flex items-center justify-center p-3 shadow-lg">
                                <special.icon className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-secondary shrink-0" />
                            </div>
                            <p className="text-secondary font-roboto text-sm md:text-base leading-relaxed">{special.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}