import { EmailHeader } from './header';
import { EmailFooter } from './footer';

export interface PasswordResetEmailProps {
  name: string;
  email: string;
}

export const passwordResetEmailTemplate = ({ name, email }: PasswordResetEmailProps): string => {
  const content = `
        <div class="content">
            <h1>Olá ${name}!</h1>

            <p>Recebemos uma solicitação para redefinir a senha da sua conta na GingaGrowth. Para continuar o processo, clique no botão abaixo:</p>

            <div style="text-align: center;">
                <a href="#" class="button">Redefinir minha senha</a>
            </div>

            <p>Se você não solicitou a redefinição de senha, ignore este email.</p>
        </div>
    `;

  return `
        ${EmailHeader}
        ${content}
        ${EmailFooter({ email, includeUnsubscribe: false })}
    `;
};
