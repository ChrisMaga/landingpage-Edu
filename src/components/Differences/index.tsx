import { TbTargetArrow, TbUsers, TbRosetteDiscountCheck, TbClock } from "react-icons/tb";
import ButtonWhastapp from "../Button-whatsapp";


export default function Differences() {
    const differences = [
        {
            icon: TbClock,
            title: "Agilidade Garantida",
            desc: "Início do processo em até 72 horas após envio da documentação."
        },
        {
            icon: TbRosetteDiscountCheck,
            title: "Experiência Comprovada",
            desc: "Mais de 20 anos dedicados as áreas de atuação."
        },
        {
            icon: TbUsers,
            title: "Atendimento Personalizado",
            desc: "Suporte completo e atualizações constantes sobre o seu caso."
        },
        {
            icon: TbTargetArrow,
            title: "Foco na Solução",
            desc: "Atuação estratégica e direta, sem complicações."
        }
    ];


    return (
        <section id="differences" className="py-16 bg-primary min-h-[80vh] md:min-h-[80vh] overflow-hidden font-poppins pl-6 pr-6 md:px-10 lg:px-20 text-quaternary relative">

            {/* Título, subtítulo e texto principal (centralizado como Hero) */}
            <div className="relative z-20 flex flex-col justify-center items-center gap-4 text-center max-w-4xl mx-auto mb-16 md:mb-20">
                <p className=" uppercase font-semibold md:text-2xl tracking-wider">
                    Diferenciais
                </p>
                <h2 className=" font-merriweather font-semibold text-3xl md:text-5xl leading-tight">
                    Por que confiar no meu serviço?
                </h2>

                <p className=" font-medium text-lg md:text-2xl px-4 leading-relaxed">
                    Aqui você recebe um atendimento humanizado, especializado e focado na sua vitória.<span className=" font-bold text-lg md:text-2xl px-1 leading-relaxed">
                        Meu compromisso é com sua tranquilidade e justiça.
                    </span>
                </p>
            </div>


            {/* grid */}
            <div className="text-quaternary relative z-20 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
                {differences.map((differences, index) => (
                    <div
                        key={index}
                        className="group backdrop-blur-sm p-6 md:p-8 lg:p-12 rounded-xl shadow-xs flex flex-row items-start text-left lg:text-left gap-6 h-full min-h-40 bg-primary shadow-quaternary/50"
                    >
                        <differences.icon className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-quaternary shrink-0 mt-1" />
                        <div className="flex-1 min-w-0">
                            <h3 className="mb-2 text-xl md:text-2xl lg:text-3xl font-semibold text-quaternary font-merriweather leading-tight">
                                {differences.title}
                            </h3>
                            <p className="font-roboto text-sm md:text-base lg:text-lg leading-relaxed lg:leading-loose">
                                {differences.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>


            {/* CTA */}
            <div className="relative z-20 flex flex-col justify-center items-center gap-4 text-center max-w-4xl mx-auto mt-16 md:mt-20">
                <p className="font-poppins text-1xl md:text-2xl leading-tight">
                    Pronto para garantir seus direitos? Não enfrente esse desafio sozinho. Confie em quem já ajudou centenas de pessoas a conquistar seus direitos.
                </p>

                <ButtonWhastapp />
            </div>


        </section>
    )
}