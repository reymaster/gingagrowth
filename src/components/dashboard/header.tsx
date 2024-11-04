'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Bell, HelpCircle, LogOut, Settings, User } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export function DashboardHeader() {
  const router = useRouter();

  const handleLogout = () => {
    // Here you would typically handle logout logic like clearing tokens
    router.push('/');
  };

  return (
    <header className='border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-16 items-center justify-between'>
        <div className='flex items-center gap-8'>
          <Link href='/dashboard' className='font-semibold text-xl'>
            GingaGrowth
          </Link>
          <nav className='hidden md:block'>
            <ul className='flex items-center gap-1 text-sm'>
              <li>
                <Link href='/dashboard' className='text-muted-foreground hover:text-foreground'>
                  Dashboard
                </Link>
              </li>
              <li className='text-muted-foreground mx-2'>/</li>
              <li className='text-foreground'>Overview</li>
            </ul>
          </nav>
        </div>

        <div className='flex items-center gap-4'>
          <Button variant='ghost' size='icon' className='relative'>
            <Bell className='h-5 w-5' />
            <span className='absolute top-2 right-2 h-2 w-2 rounded-full bg-primary' />
          </Button>
          <Button variant='ghost' size='icon'>
            <HelpCircle className='h-5 w-5' />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' className='relative h-9 w-9 rounded-full'>
                <Avatar className='h-9 w-9'>
                  <AvatarImage src='/placeholder-avatar.jpg' alt='User' />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align='end' forceMount>
              <DropdownMenuLabel>
                <div className='flex flex-col space-y-1'>
                  <p className='text-sm font-medium'>John Doe</p>
                  <p className='text-xs text-muted-foreground'>john@example.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User className='mr-2 h-4 w-4' />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className='mr-2 h-4 w-4' />
                  Settings
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className='text-red-600 cursor-pointer' onClick={handleLogout}>
                <LogOut className='mr-2 h-4 w-4' />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
