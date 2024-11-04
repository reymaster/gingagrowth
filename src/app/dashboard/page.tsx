'use client';

import { DashboardHeader } from '@/components/dashboard/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowUpRight, BarChart3, CreditCard, Settings, Users } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary'>
      <DashboardHeader />
      <main className='flex-1'>
        <div className='container mx-auto p-4 py-8'>
          <div className='flex justify-between items-center mb-8'>
            <h1 className='text-3xl font-bold'>Dashboard</h1>
            <Button variant='outline' size='icon'>
              <Settings className='h-5 w-5' />
            </Button>
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between pb-2'>
                <CardTitle className='text-sm font-medium'>Subscription Status</CardTitle>
                <CreditCard className='h-4 w-4 text-muted-foreground' />
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>Active</div>
                <p className='text-xs text-muted-foreground'>Next billing date: May 1, 2024</p>
                <Progress value={33} className='mt-3' />
                <p className='text-xs text-muted-foreground mt-2'>10 days remaining in billing cycle</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className='flex flex-row items-center justify-between pb-2'>
                <CardTitle className='text-sm font-medium'>Usage Statistics</CardTitle>
                <BarChart3 className='h-4 w-4 text-muted-foreground' />
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>2,345</div>
                <p className='text-xs text-muted-foreground'>API calls this month</p>
                <Progress value={78} className='mt-3' />
                <p className='text-xs text-muted-foreground mt-2'>78% of monthly limit</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className='flex flex-row items-center justify-between pb-2'>
                <CardTitle className='text-sm font-medium'>Team Members</CardTitle>
                <Users className='h-4 w-4 text-muted-foreground' />
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>5</div>
                <p className='text-xs text-muted-foreground'>Active team members</p>
                <Progress value={50} className='mt-3' />
                <p className='text-xs text-muted-foreground mt-2'>5/10 seats used</p>
              </CardContent>
            </Card>
          </div>

          <div className='grid md:grid-cols-2 gap-6 mt-6'>
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest actions and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  {['Subscription activated', 'Profile updated', 'Team member invited', 'New API key generated'].map((activity, i) => (
                    <div key={i} className='flex items-center justify-between p-3 bg-muted/50 rounded-lg'>
                      <span>{activity}</span>
                      <ArrowUpRight className='h-4 w-4 text-muted-foreground' />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks and settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className='grid grid-cols-2 gap-4'>
                  <Button variant='outline' className='h-24 flex flex-col gap-2'>
                    <Users className='h-5 w-5' />
                    Invite Team
                  </Button>
                  <Button variant='outline' className='h-24 flex flex-col gap-2'>
                    <CreditCard className='h-5 w-5' />
                    Billing
                  </Button>
                  <Button variant='outline' className='h-24 flex flex-col gap-2'>
                    <BarChart3 className='h-5 w-5' />
                    Analytics
                  </Button>
                  <Button variant='outline' className='h-24 flex flex-col gap-2'>
                    <Settings className='h-5 w-5' />
                    Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
