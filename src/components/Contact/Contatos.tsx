'use client';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { submitContact } from '@/app/actions/contact'; 
import ButtonWhastapp from '@/components/Button-whatsapp';
import { LuMail, LuSend } from 'react-icons/lu';

export default function Contatos() {
  const [state, formAction] = useActionState(submitContact, null);

  return (
    <section id="contatos" className="py-20 md:py-28 bg-primary relative font-heading">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-10 md:gap-16 lg:gap-24 xl:gap-28 items-start">
          <div className="lg:pt-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-quaternary leading-tight mb-6">
              Não deixe para depois o que pode mudar sua vida hoje
            </h2>
            <p className="text-lg md:text-xl text-quaternary leading-relaxed max-w-1xl">
              Muitas pessoas perdem direitos simplesmente por não procurar ajuda a tempo. Fale comigo agora, sem compromisso.
            </p>
            <div className="mt-6">
              <ButtonWhastapp />
            </div>
            <p className="mt-5 flex items-start gap-2 text-quaternary text-base md:text-lg leading-relaxed">
              <LuMail className="w-5 h-5 mt-0.5 shrink-0" />
              <span>Ou preencha o formulário ao lado que eu entro em contato com você!</span>
            </p>
          </div>

          {/* Formulário */}
          <form
            action={formAction}
            className="w-full max-w-[680px] justify-self-end bg-white/80 border border-primary/10 shadow-xl rounded-2xl p-6 md:p-8 space-y-5"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
                Solicite uma consulta gratuita
              </h3>
              <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                Nome Completo *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full p-4 rounded-xl bg-white border border-primary/20 focus:border-primary/50 focus:outline-none transition-all text-base placeholder:text-secondary/50"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                E-mail *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full p-4 rounded-xl bg-white border border-primary/20 focus:border-primary/50 focus:outline-none transition-all text-base placeholder:text-secondary/50"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                Telefone/WhatsApp *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="w-full p-4 rounded-xl bg-white border border-primary/20 focus:border-primary/50 focus:outline-none transition-all text-base placeholder:text-secondary/50"
                placeholder="(11) 91234-5678"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                Mensagem *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full p-4 rounded-xl bg-white border border-primary/20 focus:border-primary/50 focus:outline-none transition-all resize-vertical text-base placeholder:text-secondary/50"
                placeholder="Descreva seu caso ou dúvida..."
              />
            </div>

            <div className="pt-2">
              <SubmitButton />
            </div>
          </form>
        </div>

        {/* Feedback */}
        {state?.success && (
          <div className="mt-8 p-6 md:p-8 bg-secondary/20 rounded-2xl text-center border-2 border-secondary/50">
            <p className="text-lg font-semibold text-secondary mb-2">✅ {state.message}</p>
            <p className="text-base text-quaternary">Obrigado! Já recebi sua mensagem e entrarei em contato o mais breve possível.</p>
          </div>
        )}
        {state?.error && (
          <div className="mt-8 p-6 md:p-8 bg-red-500/10 rounded-2xl text-center border-2 border-red-500/30">
            <p className="text-lg font-semibold text-red-600 mb-2">❌ Erro</p>
            <p className="text-base text-red-700">{state.error}</p>
          </div>
        )}
      </div>
    </section>
  );
}

// Botão Submit com loading
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group w-full flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <LuSend className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      {pending ? 'Enviando...' : 'Enviar Mensagem'}
    </button>
  );
}