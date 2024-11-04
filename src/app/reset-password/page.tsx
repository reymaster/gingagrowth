'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { KeyRound } from 'lucide-react';
import Link from 'next/link';

export default function ResetPassword() {
  return (
    <main className='min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary p-4'>
      <Card className='w-full max-w-md'>
        <CardHeader className='space-y-1'>
          <div className='flex items-center gap-2'>
            <KeyRound className='h-6 w-6' />
            <CardTitle className='text-2xl'>Reset password</CardTitle>
          </div>
          <CardDescription>Enter your email address and well send you a link to reset your password</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='space-y-2'>
            <Label htmlFor='email'>Email</Label>
            <Input id='email' type='email' placeholder='name@example.com' />
          </div>
        </CardContent>
        <CardFooter className='flex flex-col gap-4'>
          <Button className='w-full'>Send reset link</Button>
          <div className='text-sm text-muted-foreground text-center'>
            Remember your password?{' '}
            <Link href='/login' className='text-primary hover:underline'>
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
