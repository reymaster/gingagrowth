import { EmailHeader } from './header';
import { EmailFooter } from './footer';

export interface ValidationEmailProps {
  name: string;
  email: string;
  validationUrl: string;
}

export const validationEmailTemplate = ({ name, email, validationUrl }: ValidationEmailProps): string => {
  const content = `
        <div class="content">
            <h1>Olá ${name}, falta pouco para começar a usar nossa Plataforma!</h1>

            <p>Estamos muito felizes em ter você conosco. Para começar a usar nossos serviços, por favor, valide seu endereço de email clicando no botão abaixo:</p>

            <div style="text-align: center;">
                <a href="${validationUrl}" class="button">Validar meu email</a>
            </div>

            <p>Se o botão acima não funcionar, você também pode copiar e colar o seguinte link em seu navegador:</p>
            <p style="color: #666;">${validationUrl}</p>

            <p>Este link expirará em 24 horas por motivos de segurança.</p>
        </div>
    `;

  return `
        ${EmailHeader}
        ${content}
        ${EmailFooter({ email, includeUnsubscribe: false })}
    `;
};
