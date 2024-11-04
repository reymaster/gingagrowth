'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const features = [
    'Unlimited access to all features',
    'Priority customer support',
    'Early access to new features',
    'Custom integrations',
    'Advanced analytics',
  ];

  const plans = [
    {
      name: 'Basic',
      price: '$9',
      description: 'Perfect for individuals',
      features: features.slice(0, 2),
    },
    {
      name: 'Pro',
      price: '$29',
      description: 'Best for professionals',
      features: features.slice(0, 4),
    },
    {
      name: 'Enterprise',
      price: '$99',
      description: 'For large organizations',
      features: features,
    },
  ];

  const handleChoosePlan = (planName: string, price: string) => {
    router.push(`/checkout?plan=${planName.toLowerCase()}&price=${price.replace('$', '')}`);
  };

  return (
    <main className='min-h-screen bg-gradient-to-b from-background to-secondary'>
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold tracking-tight sm:text-6xl mb-4 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent'>
            Welcome to Premium App
          </h1>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Experience the best features with our premium subscription plans. Get started today and unlock your full potential.
          </p>
          <div className='mt-8 flex gap-4 justify-center'>
            <Link href='/login'>
              <Button size='lg'>
                Sign In
                <ArrowRight className='ml-2 h-4 w-4' />
              </Button>
            </Link>
            <Link href='/register'>
              <Button size='lg' variant='outline'>
                Create Account
              </Button>
            </Link>
          </div>
        </div>

        <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {plans.map((plan) => (
            <Card key={plan.name} className='relative overflow-hidden'>
              {plan.name === 'Pro' && (
                <div className='absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 rounded-bl-lg text-sm font-medium'>Popular</div>
              )}
              <CardHeader>
                <CardTitle className='text-2xl'>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className='mt-4'>
                  <span className='text-4xl font-bold'>{plan.price}</span>
                  <span className='text-muted-foreground'>/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className='space-y-3'>
                  {plan.features.map((feature) => (
                    <li key={feature} className='flex items-center gap-2'>
                      <CheckCircle2 className='h-5 w-5 text-primary' />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className='w-full mt-6' onClick={() => handleChoosePlan(plan.name, plan.price)}>
                  Choose {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
