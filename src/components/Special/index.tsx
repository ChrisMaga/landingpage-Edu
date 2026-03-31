'use client';

import { FaGavel } from "react-icons/fa";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import ButtonForm from "../Button-form";
import BackgroundLight from "../BackgroundLight";

export default function Specials() {
    // Array para cards (ideal para reusabilidade e manutenção)
    const specials = [
        {
            icon: FaGavel,
            title: "Direito Civil",
            desc: "Comprou e não recebeu? Foi cobrado indevidamente? Teve o nome negativado sem motivo? O plano de saúde negou seu tratamento, cirurgia ou exame?",
            tags: ["Isenções de Tributos", "Contratos", "Indenizações", "Negativação", "Planos de Saúde", "Reajuste Abusivo", "Cobranças Indevidas"]
        },
        {
            icon: MdOutlineHealthAndSafety,
            title: "Previdência Social",
            desc: "Teve o benefício negado pelo INSS? Quer se aposentar e não sabe como? Nós cuidamos de todo o processo para você receber o que merece.",
            tags: ["Aposentadorias", "BPC/LOAS", "Revisões", "Isenção de IR"]
        },
        {
            icon: LuBriefcaseBusiness,
            title: "Direito Trabalhista",
            desc: "Foi demitido sem receber o que é seu? Trabalhou sem carteira assinada? Sofreu assédio no trabalho? Sofreu um acidente e não teve suporte da empresa? ",
            tags: ["Demissões", "Horas Extras", "FGTS", "Vínculo empregatício", "Assédio Moral", "Rescisão Contratual"]
        }
    ];

    return (
        <section id="specials" className="min-h-[80vh] md:min-h-[80vh] bg-quaternary/10 relative overflow-hidden font-poppins pl-6 pr-6 md:px-10 lg:px-20 py-20">

            <BackgroundLight />

            {/* Título, subtítulo e texto principal (centralizado como Hero) */}
            <div className="relative z-20 flex flex-col justify-center items-center gap-4 text-center max-w-4xl mx-auto mb-16 md:mb-20">
                <p className="text-secondary uppercase font-semibold md:text-2xl tracking-wider">
                    Especialidades
                </p>
                <h2 className="text-primary font-merriweather font-semibold text-3xl md:text-5xl leading-tight">
                    Como posso te ajudar?
                </h2>
                <p className="text-secondary font-medium text-lg md:text-2xl px-4 leading-relaxed">
                    Atuo nas áreas que mais afetam o dia a dia das pessoas. Entenda como posso resolver o seu problema.
                </p>
            </div>

            {/* Quadros de áreas do direito (grid responsivo) */}
            <div className="relative z-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
                {specials.map((special, index) => (
                    <div key={index} className="group bg-tertiary/20 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-secondary/30 shadow-xl flex flex-col items-center text-center gap-4 h-full">
                        <special.icon className="w-12 h-12 md:w-16 md:h-16 text-secondary group-hover:scale-110 transition-all duration-300" />
                        <h3 className="text-xl md:text-2xl font-semibold text-primary font-merriweather">{special.title}</h3>
                        <p className="text-secondary font-roboto text-sm md:text-base leading-relaxed">{special.desc}</p>

                        {/* Tags dentro do card */}
                        <div className="flex flex-wrap gap-2 justify-center mt-2 pt-5 border-t border-secondary/20 w-full">
                            {special.tags.map((tag, tagIndex) => (
                                <span
                                    key={tagIndex}
                                    className="bg-secondary/10 text-primary px-3 py-1 rounded-full text-xs md:text-sm font-medium font-roboto tracking-wide shadow-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Texto final */}
            <p className="text-secondary font-medium text-lg md:text-2xl px-4 leading-relaxed text-center mt-12 max-w-3xl mx-auto">
                Se identificou com algum desses problemas? Saiba que você tem direitos! Fale agora com um especialista.
            </p>

            {/* botão para formulário */}
            <ButtonForm />
        </section>
    );
}