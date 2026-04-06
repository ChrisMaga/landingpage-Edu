import { LuMapPinned, LuMail, LuClock, LuPhone } from "react-icons/lu";

export default function Local() {
  const addresContact = [
    {
      icon: LuMapPinned,
      title: "ENDEREÇO",
      desc: "Rua do Bosque, 199, Jardim Bela Vista, Santo André - SP, 09040-280",
    },
    {
      icon: LuMail,
      title: "E-MAIL",
      desc: "mf.eduardo@gmail.com",
    },
    {
      icon: LuPhone,
      title: "TELEFONES / WHATSAPP",
      desc: ["(11) 99117-5030", "(11) 99832-0101"],
    },
    {
      icon: LuClock,
      title: "HORÁRIO DE ATENDIMENTO",
      desc: "Seg a Sex, 08h às 18h",
    },
  ];

  return (
    <section
      id="local"
      className="min-h-[60vh] md:min-h-[50vh] bg-quaternary/10 relative overflow-hidden font-heading px-4 md:px-10 lg:px-20 py-16 md:py-20"
    >
      {/* Título central */}
      <div className="flex justify-center mb-12 md:mb-20">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-primary uppercase tracking-wide">
          LOCALIZAÇÃO
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-40 max-w-6xl mx-auto items-start lg:items-center">
        {/* Cards contato (esquerda) */}
        <div className="flex flex-col gap-2 w-full lg:w-1/2">
          {addresContact.map((item, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 p-4 md:p-6 bg-white/50 backdrop-blur-sm"
            >
              {/* Ícone quadrado cinza claro */}
              <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0 shadow-md">
                <item.icon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold font-heading text-primary text-sm md:text-base lg:text-lg uppercase tracking-wide mb-1">
                  {item.title}
                </h3>
                {Array.isArray(item.desc) ? (
                  <ul className="text-secondary font-body font-normal text-sm md:text-base space-y-1 list-disc list-inside">
                    {item.desc.map((phone, i) => (
                      <li key={i}>{phone}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-secondary font-body font-normal text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Google Maps (direita) */}
        <div className="w-full lg:w-1/2 h-80 md:h-96 lg:h-125 rounded-2xl shadow-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.845482606748!2d-46.532177685099!3d-23.661099684629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e0a4b0b0b0b%3A0x4b0b0b0b0b0b0b0b!2sRua%20do%20Bosque%2C%20199%20-%20Jardim%20Bela%20Vista%2C%20Santo%20Andr%C3%A9%20-%20SP%2C%2009040-280!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização - Rua do Bosque, 199, Santo André/SP"
          />
        </div>
      </div>
    </section>
  );
}