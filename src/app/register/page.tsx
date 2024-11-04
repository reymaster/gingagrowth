'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserPlus, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();

  const handleRegister = async () => {
    // Verifica se as senhas correspondem
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    // Verifica se todos os campos obrigatórios estão preenchidos
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    setError(null);

    // Requisição para API de registro
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: `${firstName} ${lastName}`, email, password }),
    });

    const data = await res.json();
    if (!res.ok) {
      setError(data.error || 'Falha ao criar a conta');
      return;
    }

    // Redireciona para login após o registro bem-sucedido
    router.push('/login');
  };

  return (
    <main className='min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary p-4'>
      <Card className='w-full max-w-md'>
        <CardHeader className='space-y-1'>
          <div className='flex items-center gap-2'>
            <UserPlus className='h-6 w-6' />
            <CardTitle className='text-2xl'>Criar uma conta</CardTitle>
          </div>
          <CardDescription>Insira suas informações para criar sua conta</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='grid grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <Label htmlFor='firstName'>Nome</Label>
              <Input id='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='John' />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='lastName'>Sobrenome</Label>
              <Input id='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Doe' />
            </div>
          </div>
          <div className='space-y-2'>
            <Label htmlFor='email'>Email</Label>
            <Input id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='name@example.com' />
          </div>
          <div className='space-y-2 relative'>
            <Label htmlFor='password'>Senha</Label>
            <Input
              id='password'
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Digite sua senha'
            />
            <button type='button' className='absolute right-2 top-9' onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <EyeOff className='h-5 w-5 text-muted-foreground' /> : <Eye className='h-5 w-5 text-muted-foreground' />}
            </button>
          </div>
          <div className='space-y-2 relative'>
            <Label htmlFor='confirmPassword'>Confirmar Senha</Label>
            <Input
              id='confirmPassword'
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder='Confirme sua senha'
            />
            <button type='button' className='absolute right-2 top-9' onClick={() => setShowConfirmPassword((prev) => !prev)}>
              {showConfirmPassword ? <EyeOff className='h-5 w-5 text-muted-foreground' /> : <Eye className='h-5 w-5 text-muted-foreground' />}
            </button>
          </div>
          {error && <p className='text-red-500 text-sm'>{error}</p>}
        </CardContent>
        <CardFooter className='flex flex-col gap-4'>
          <Button onClick={handleRegister} className='w-full'>
            Criar conta
          </Button>
          <Button onClick={() => signIn('google')} variant='outline' className='w-full'>
            Registrar com Google
          </Button>
          <div className='text-sm text-muted-foreground text-center'>
            Já tem uma conta?{' '}
            <Link href='/login' className='text-primary hover:underline'>
              Entre
            </Link>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
