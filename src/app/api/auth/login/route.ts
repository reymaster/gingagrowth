import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return NextResponse.json({ error: 'Usuário não encontrado' }, { status: 401 });
  }

  if (!user.emailVerified) {
    return NextResponse.json({ error: 'E-mail não verificado' }, { status: 403 });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return NextResponse.json({ error: 'Senha incorreta' }, { status: 401 });
  }

  // Configura o token JWT com expiração de 1 hora
  const token = sign({ userId: user.id }, process.env.NEXTAUTH_SECRET!, {
    expiresIn: '1h',
  });

  // Configura o cookie para armazenar o token JWT
  const response = NextResponse.json({
    message: 'Login bem-sucedido',
    redirect: '/dashboard', // Indica a URL de redirecionamento
  });
  response.cookies.set('auth_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60,
    path: '/',
  });

  return response;
}
