import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { sign, verify } from 'jsonwebtoken';
import { sendEmail } from '../../../../lib/email';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');

  if (!token) {
    return NextResponse.json({ error: 'Token inválido' }, { status: 400 });
  }

  try {
    // Verifica o token
    const decoded = verify(token, process.env.NEXTAUTH_SECRET!) as { email: string };

    // Ativa o usuário, removendo o token de verificação e definindo o email como verificado
    await prisma.user.update({
      where: { email: decoded.email },
      data: { emailVerified: true, verificationToken: null },
    });

    const user = await prisma.user.findUnique({
      where: { email: decoded.email },
    });

    if (user) {
      const data = { name: user.name, email: user.email } as any;
      await sendEmail({
        to: user.email,
        subject: 'Bem-vindo(a) à GingaGrowth!',
        templateName: 'WelcomeEmail',
        data,
      });
    }

    return NextResponse.json({ message: 'E-mail verificado com sucesso!' });
  } catch (error) {
    return NextResponse.json({ error: 'Token expirado ou inválido' }, { status: 400 });
  }
}
