'use server';

import nodemailer from 'nodemailer';

type ContactState = {
  success?: boolean;
  message?: string;
  error?: string;
};

export async function submitContact(
  _prevState: ContactState | null,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get('name') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const phone = String(formData.get('phone') || '').trim();
  const message = String(formData.get('message') || '').trim();

  if (!name || !email || !phone || !message) {
    return { success: false, error: 'Preencha nome, e-mail, telefone e mensagem.' };
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  const contactReceiver = process.env.CONTACT_RECEIVER_EMAIL || gmailUser;

  if (!gmailUser || !gmailAppPassword || !contactReceiver) {
    return {
      success: false,
      error: 'Configuração de e-mail ausente. Verifique as variáveis de ambiente.',
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    await transporter.sendMail({
      from: `"Site - Formulário" <${gmailUser}>`,
      to: contactReceiver,
      replyTo: email,
      subject: `Novo contato: ${name}`,
      text: `Nome: ${name}
Email: ${email}
Telefone: ${phone}

Mensagem:
${message}`,
      html: `
        <h2>Novo contato pelo site</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return { success: true, message: 'Mensagem enviada com sucesso! Entrarei em contato o mais breve possível.' };
  } catch {
    return { success: false, error: 'Não foi possível enviar. Tente novamente.' };
  }
}