'use client';

import { FaGavel } from "react-icons/fa";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import ButtonForm from "../Button-form";


export default function Specials() {
    // Array para cards (ideal para reusabilidade e manutenção)
    const specials = [
        {
            icon: FaGavel,
            title: "Direito Civil",
            desc: "Atuação em questões do dia a dia que envolvem direitos e obrigações, como contratos, indenizações e responsabilidades. Cada situação é analisada com atenção aos detalhes, buscando orientar o cliente com clareza e encontrar caminhos seguros para resolver o problema.",
            tags: ["Contratos", "Indenizações", "Responsabilidades", "Direitos Individuais"]
        },
        {
            icon: MdOutlineHealthAndSafety,
            title: "Previdência Social",
            desc: "Orientação em benefícios previdenciários, como aposentadorias, pensões e auxílios. A análise é feita de forma cuidadosa, considerando o histórico de cada cliente para garantir que seus direitos sejam compreendidos e corretamente buscados.",
            tags: ["Aposentadorias", "BPC/LOAS", "Revisões", "Isenção de IR"]
        },
        {
            icon: LuBriefcaseBusiness,
            title: "Direito Trabalhista",
            desc: "Atuação em situações relacionadas ao trabalho, como rescisões, direitos não pagos e conflitos entre empregado e empregador. O foco é esclarecer a situação, orientar sobre os direitos envolvidos e conduzir o caso com responsabilidade, buscando evitar prejuízos.",
            tags: ["Demissões", "Horas Extras", "FGTS", "Vínculo empregatício", "Assédio Moral", "Rescisão Contratual"]
        }
    ];

    return (
        <section id="specials" className="min-h-[80vh] md:min-h-[80vh] bg-quaternary/10 relative overflow-hidden font-heading pl-6 pr-6 md:px-10 lg:px-20 py-20">


            {/* Título, subtítulo e texto principal (centralizado como Hero) */}
            <div className="relative z-20 flex flex-col justify-center items-center gap-4 text-center max-w-4xl mx-auto mb-16 md:mb-20">
                <p className="text-secondary font-normal text-lg md:text-2xl px-4 leading-relaxed">
                    Cada caso exige mais do que conhecimento técnico, exige análise cuidadosa, experiência e uma condução segura em cada etapa.
                </p>
                <p>Além de um atendimento direto e responsável, avalio cada situação de forma individual para orientar com clareza, reduzir incertezas e conduzir o cliente com segurança ao longo de todo o processo.</p>
            <p>Posso te ajudar nas áreas que mais afetam seu dia a dia:</p>
            </div>

            {/* Quadros de áreas do direito (grid responsivo) */}
            <div className="relative z-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
                {specials.map((special, index) => (
                    <div key={index} className="group bg-tertiary/20 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-secondary/30 shadow-xl flex flex-col items-center text-center gap-4 h-full">
                        <special.icon className="w-12 h-12 md:w-16 md:h-16 text-secondary group-hover:scale-110 transition-all duration-300" />
                        <h3 className="text-xl md:text-2xl font-bold text-primary font-heading">{special.title}</h3>
                        <p className="text-secondary font-body text-sm md:text-base leading-relaxed">{special.desc}</p>

                        {/* Tags dentro do card */}
                        <div className="flex flex-wrap gap-2 justify-center mt-2 pt-5 border-t border-secondary/20 w-full">
                            {special.tags.map((tag, tagIndex) => (
                                <span
                                    key={tagIndex}
                                    className="bg-secondary/10 text-primary px-3 py-1 rounded-full text-xs md:text-sm font-normal font-body tracking-wide shadow-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Texto final */}
            <p className="text-secondary font-normal text-lg md:text-2xl px-4 leading-relaxed text-center mt-12 max-w-3xl mx-auto">
                Se identificou com algum desses problemas? Saiba que você tem direitos! Fale agora com um especialista.
            </p>

            {/* botão para formulário */}
            <ButtonForm />
        </section>
    );
}