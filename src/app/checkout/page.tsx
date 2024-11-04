'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CreditCard, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

export default function Checkout() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan') || 'pro';
  const price = searchParams.get('price') || '29';
  const tax = (Number(price) * 0.1).toFixed(2);
  const total = (Number(price) + Number(tax)).toFixed(2);

  const handleCompletePurchase = () => {
    // Here you would typically handle the payment processing
    // For now, we'll just redirect to the dashboard
    router.push('/dashboard');
  };

  return (
    <main className='min-h-screen bg-gradient-to-b from-background to-secondary p-4'>
      <div className='container mx-auto max-w-4xl'>
        <div className='flex items-center gap-2 mb-8'>
          <ShoppingCart className='h-6 w-6' />
          <h1 className='text-2xl font-bold'>Checkout</h1>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          <div className='md:col-span-2 space-y-6'>
            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>Payment details</CardTitle>
                <CardDescription>Enter your payment information</CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='space-y-2'>
                  <Label>Payment method</Label>
                  <RadioGroup defaultValue='card' className='grid grid-cols-3 gap-4'>
                    <div>
                      <RadioGroupItem value='card' id='card' className='peer sr-only' />
                      <Label
                        htmlFor='card'
                        className='flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary'
                      >
                        <CreditCard className='mb-3 h-6 w-6' />
                        Card
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='number'>Card number</Label>
                  <Input id='number' placeholder='4242 4242 4242 4242' />
                </div>

                <div className='grid grid-cols-3 gap-4'>
                  <div className='space-y-2'>
                    <Label htmlFor='month'>Expiry month</Label>
                    <Select>
                      <SelectTrigger id='month'>
                        <SelectValue placeholder='Month' />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 12 }, (_, i) => {
                          const month = (i + 1).toString().padStart(2, '0');
                          return (
                            <SelectItem key={month} value={month}>
                              {month}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='year'>Expiry year</Label>
                    <Select>
                      <SelectTrigger id='year'>
                        <SelectValue placeholder='Year' />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 10 }, (_, i) => {
                          const year = (new Date().getFullYear() + i).toString();
                          return (
                            <SelectItem key={year} value={year}>
                              {year}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='cvc'>CVC</Label>
                    <Input id='cvc' placeholder='123' />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>Billing address</CardTitle>
                <CardDescription>Enter your billing address</CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='space-y-2'>
                    <Label htmlFor='firstName'>First name</Label>
                    <Input id='firstName' />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='lastName'>Last name</Label>
                    <Input id='lastName' />
                  </div>
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='address'>Address</Label>
                  <Input id='address' />
                </div>
                <div className='grid grid-cols-3 gap-4'>
                  <div className='space-y-2'>
                    <Label htmlFor='city'>City</Label>
                    <Input id='city' />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='state'>State</Label>
                    <Input id='state' />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='zip'>ZIP</Label>
                    <Input id='zip' />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className='h-fit'>
            <CardHeader>
              <CardTitle className='text-xl'>Order summary</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='flex justify-between'>
                <span>{plan.charAt(0).toUpperCase() + plan.slice(1)} Plan (Monthly)</span>
                <span>${price}.00</span>
              </div>
              <div className='flex justify-between text-muted-foreground'>
                <span>Tax</span>
                <span>${tax}</span>
              </div>
              <div className='border-t pt-4'>
                <div className='flex justify-between font-bold'>
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className='w-full' onClick={handleCompletePurchase}>
                Complete purchase
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
