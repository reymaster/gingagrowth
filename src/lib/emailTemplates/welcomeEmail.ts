import { EmailHeader } from './header';
import { EmailFooter } from './footer';

export interface WelcomeEmailProps {
  name: string;
  email: string;
}

export const welcomeEmailTemplate = ({ name, email }: WelcomeEmailProps): string => {
  const content = `
        <div class="content">
            <h1>Olá ${name}!</h1>

            <p>É com grande satisfação que damos as boas-vindas à GingaGrowth! Agradecemos sinceramente por escolher nossa plataforma para impulsionar seu crescimento digital.</p>

            <p>Na GingaGrowth, nossa missão é transformar dados em resultados reais para seu negócio, e estamos muito animados para fazer parte da sua jornada de crescimento.</p>

            <div class="feature-box">
                <h2>O que você encontrará na nossa plataforma:</h2>

                <div class="feature-item">
                    📊 <strong>Analytics Avançado:</strong> Insights profundos sobre seu público e performance
                </div>

                <div class="feature-item">
                    🎯 <strong>Automação Inteligente:</strong> Ferramentas para otimizar suas campanhas
                </div>

                <div class="feature-item">
                    📈 <strong>Relatórios Personalizados:</strong> Visualize seus resultados de forma clara e objetiva
                </div>

                <div class="feature-item">
                    🤝 <strong>Suporte Dedicado:</strong> Nossa equipe está sempre pronta para ajudar
                </div>
            </div>

            <h3>Próximos Passos</h3>
            <p>Para começar a aproveitar todos os benefícios da plataforma, sugerimos:</p>
            <ol>
                <li>Complete seu perfil</li>
                <li>Configure sua primeira campanha</li>
                <li>Explore nossos tutoriais iniciais</li>
            </ol>

            <div style="text-align: center;">
                <a href="#" class="button">Acessar Minha Conta</a>
            </div>

            <p>Preparamos um guia completo para seus primeiros passos. Acesse nosso centro de ajuda para descobrir como maximizar sua experiência com a GingaGrowth.</p>

            <div class="social-links">
                <p>Siga-nos nas redes sociais para dicas e novidades:</p>
                <a href="#" style="color: #666;">LinkedIn</a>
                <a href="#" style="color: #666;">Instagram</a>
                <a href="#" style="color: #666;">YouTube</a>
            </div>
        </div>
    `;

  return `
        ${EmailHeader}
        ${content}
        ${EmailFooter({ email, includeUnsubscribe: true })}
    `;
};
