'use client';

import { LucideApple } from 'lucide-react';
import { FaGoogle, FaTwitter } from 'react-icons/fa';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='flex min-h-screen items-center justify-center bg-muted'>
      <div className='w-full max-w-md bg-background shadow-lg rounded-lg p-8'>
        <div className='text-center mb-6'>
          <h2 className='text-2xl font-bold text-primary'>GingaGrowth</h2>
          <p className='text-muted-foreground'>Por favor, insira seus dados para entrar.</p>
        </div>

        <div className='flex gap-4 justify-center mb-6'>
          <button
            onClick={() => signIn('apple')}
            className='flex items-center justify-center w-12 h-12 rounded-lg border border-muted hover:bg-accent'
          >
            <LucideApple className='text-foreground' />
          </button>
          <button
            onClick={() => signIn('google')}
            className='flex items-center justify-center w-12 h-12 rounded-lg border border-muted hover:bg-accent'
          >
            <FaGoogle className='text-foreground' />
          </button>
          <button
            onClick={() => signIn('twitter')}
            className='flex items-center justify-center w-12 h-12 rounded-lg border border-muted hover:bg-accent'
          >
            <FaTwitter className='text-foreground' />
          </button>
        </div>

        <div className='flex items-center mb-6'>
          <hr className='flex-grow border-muted' />
          <span className='px-4 text-muted-foreground'>OU</span>
          <hr className='flex-grow border-muted' />
        </div>

        <form className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-foreground'>Endereço de E-mail</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='mt-1 w-full px-3 py-2 border border-muted rounded-lg focus:outline-none focus:border-primary bg-background text-foreground'
              placeholder='Digite seu e-mail...'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-foreground'>Senha</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='mt-1 w-full px-3 py-2 border border-muted rounded-lg focus:outline-none focus:border-primary bg-background text-foreground'
              placeholder='Digite sua senha'
            />
          </div>

          <div className='flex items-center justify-between'>
            <label className='flex items-center text-sm text-muted-foreground'>
              <input type='checkbox' className='mr-2' />
              Lembrar-me
            </label>
            <a href='/reset-password' className='text-sm text-primary hover:underline'>
              Esqueceu sua senha?
            </a>
          </div>

          <button type='submit' className='w-full bg-zinc-900 text-white py-2 px-4 rounded-lg hover:bg-primary-dark focus:outline-none'>
            Entrar
          </button>
        </form>

        <div className='text-center mt-6'>
          <p className='text-muted-foreground'>
            Não tem uma conta ainda?{' '}
            <a href='/register' className='text-primary hover:underline'>
              Registre-se
            </a>
          </p>
          <p className='text-center pt-8'>
            <Link href='/' className='text-sm text-primary hover:underline'>
              &larr; Voltar para a Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
