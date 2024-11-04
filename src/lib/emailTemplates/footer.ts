interface FooterProps {
  email?: string;
  includeUnsubscribe?: boolean;
}

export const EmailFooter = ({ email, includeUnsubscribe = true }: FooterProps): string => `
      <div class="footer" style="padding: 20px; text-align: center; font-size: 12px; color: #666; border-top: 1px solid #f0f0f0;">
          <p>Se tiver alguma dúvida, nossa equipe de suporte está à disposição em suporte@gingagrowth.com</p>
          ${email ? `<p>Este email foi enviado para ${email} porque você se cadastrou na GingaGrowth.</p>` : ''}
          <p>© ${new Date().getFullYear()} GingaGrowth. Todos os direitos reservados.</p>
          <p>
              <a href="#" style="color: #666; text-decoration: none;">Política de Privacidade</a> |
              <a href="#" style="color: #666; text-decoration: none;">Termos de Uso</a>
          </p>
          ${
            includeUnsubscribe
              ? `
          <p style="font-size: 10px;">
              Você está recebendo este email porque se cadastrou na GingaGrowth.<br>
              Para atualizar suas preferências de email ou cancelar a inscrição, clique aqui.
          </p>
          `
              : ''
          }
      </div>
  </div>
</body>
</html>
`;
