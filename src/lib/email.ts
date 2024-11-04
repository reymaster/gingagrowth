import nodemailer from 'nodemailer';
import { WelcomeEmailProps, welcomeEmailTemplate } from './emailTemplates/welcomeEmail';
import { ValidationEmailProps, validationEmailTemplate } from './emailTemplates/validationEmail';
import { PasswordResetEmailProps, passwordResetEmailTemplate } from './emailTemplates/passwordResetEmail';

type EmailTemplateKeys = 'WelcomeEmail' | 'ValidationEmail' | 'PasswordResetEmail';

interface SendEmailParams {
  to: string;
  subject: string;
  templateName: EmailTemplateKeys;
  data: WelcomeEmailProps & ValidationEmailProps & PasswordResetEmailProps;
}

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: Number(process.env.EMAIL_SERVER_PORT),
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
});

// Objeto de mapeamento dos templates de e-mail
const emailTemplates = {
  WelcomeEmail: welcomeEmailTemplate,
  ValidationEmail: validationEmailTemplate,
  PasswordResetEmail: passwordResetEmailTemplate,
};

// Função para envio de e-mails dinâmicos
export async function sendEmail({ to, subject, templateName, data }: SendEmailParams) {
  // Verifica se o template existe no mapeamento
  const templateFunction = emailTemplates[templateName];
  if (!templateFunction) {
    throw new Error(`Template ${templateName} não encontrado.`);
  }

  // Gera o conteúdo do e-mail usando a função do template
  const htmlContent = templateFunction(data);

  // Envia o e-mail
  await transporter.sendMail({
    from: process.env.EMAIL_SERVER_USER,
    html: htmlContent,
    to,
    subject,
  });
}
