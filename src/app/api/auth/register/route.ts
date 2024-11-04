import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  const { name, email, password } = await request.json();

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return NextResponse.json({ error: 'Email já cadastrado' }, { status: 400 });
  }

  // Hasheia a senha e cria um token de verificação
  const hashedPassword = await bcrypt.hash(password, 10);
  const verificationToken = sign({ email }, process.env.NEXTAUTH_SECRET!, { expiresIn: '1d' });

  // Cria o usuário com o token de verificação e status de email não verificado
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      emailVerified: false,
      verificationToken,
    },
  });

  // Envia o e-mail de verificação
  const validationUrl = `${process.env.NEXTAUTH_URL}/api/auth/verify-email?token=${verificationToken}`;
  const data = { name, email, validationUrl } as any;
  await sendEmail({
    to: email,
    templateName: 'ValidationEmail',
    subject: 'GingaGrowth - Validação de Email',
    data,
  });

  return NextResponse.json({ message: 'Usuário registrado. Verifique seu email para ativar a conta.' });
}
