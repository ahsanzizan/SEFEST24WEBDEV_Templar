'use client';

import { Button } from '@/app/components/global/button';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

const menus: { href: string; title: string }[] = [
  { href: '/', title: 'Home' },
  { href: '/admin', title: 'Dashboard' },
  { href: '/admin/user', title: 'Users' },
  { href: '/admin/donation', title: 'Donations' }
  // { href: '/admin/user', title: 'Organizations' },
  // { href: '/admin/user', title: 'Events' }
];

export default function Sidebar() {
  return (
    <aside className="fixed grid h-screen w-[300px] grid-cols-1 content-between rounded-r-3xl border-r border-tertiary bg-white p-4 text-primary">
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-2">
          <Image
            src="/assets/icon-dark.svg"
            alt="Logo"
            width={500}
            height={500}
            className="h-12 w-12 rounded-full"
          />
          <p className="text-2xl font-semibold">Admin Panel</p>
        </div>
        {menus.map((menu, index) => (
          <Link
            key={index}
            className="relative h-8 text-xl after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:rounded-full after:bg-tertiary after:transition-transform after:duration-200 after:ease-in-out hover:after:origin-left hover:after:scale-x-100"
            href={menu.href}
          >
            {menu.title}
          </Link>
        ))}
      </div>
      <Button
        onClick={() => signOut({ callbackUrl: '/' })}
        className="flex w-full justify-center xl:mt-[20px] xl:inline-flex"
        variant={'danger'}
      >
        Logout
      </Button>
    </aside>
  );
}
