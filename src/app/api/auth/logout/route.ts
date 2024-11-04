import { NextResponse } from 'next/server';

export async function GET() {
  const response = NextResponse.json({ message: 'Logout bem-sucedido' });
  response.cookies.set('auth_token', '', { maxAge: 0, path: '/' });
  return response;
}
