import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verify } from 'jsonwebtoken';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    verify(token, process.env.NEXTAUTH_SECRET!);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

// Defina quais rotas precisam de autenticação
export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*'], // Exemplo de rotas protegidas
};
