'use client';

import Image from 'next/image';
import NextLink from 'next/link';

import { cn } from '@/utils/cn';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaHamburger } from 'react-icons/fa';
import { Link } from '@/app/components/global/button';

interface Menu {
  title: string;
  href: string;
  auth?: boolean;
}

const menus: Menu[] = [
  { title: 'Beranda', href: '#home' },
  { title: 'Tentang', href: '#about' },
  { title: 'Tujuan', href: '#tujuan' },
  { title: 'Join', href: '#join-us' },
  { title: 'Events', href: '#events' }
];

export default function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 80);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed z-[999] mx-auto flex w-full flex-col xl:relative">
      <div className="z-[999] mx-auto flex w-full origin-left justify-between bg-primary px-5 py-4 xl:max-w-[1192px] xl:bg-transparent xl:py-0">
        <NextLink href={'/'} className="block xl:mt-[20px]">
          <Image
            src={'/assets/logo.svg'}
            alt="Logo moklet.org"
            width={120}
            height={50}
            className="pointer-events-none h-[50px] w-[200px]"
          />
        </NextLink>
        <div
          className={cn(
            `fixed left-1/2 top-[20px] hidden w-full justify-between transition-all duration-300 xl:flex xl:items-center ${scrolled ? 'max-w-[620px]' : 'max-w-[540px]'} -translate-x-1/2 rounded-xl border-[0.5px] border-neutral-500 bg-primary p-2 shadow-md`
          )}
        >
          {scrolled && (
            <NextLink href="/">
              <Image
                src={'/assets/icon.svg'}
                alt="Logo moklet.org"
                width={40}
                height={40}
                className={cn(
                  `pointer-events-none h-[40px] transition-all duration-300 ${scrolled ? 'w-[40px]' : 'w-0'}`
                )}
              />
            </NextLink>
          )}
          {menus.map((menu) => (
            <NextLink
              key={menu.title}
              href={menu.href}
              // Splitted "/a/b" will form an array: ["", "a", "b"], that's why we use the second index as comparation
              className={cn(
                `rounded-md px-5 py-2 text-center text-white transition-all duration-300 hover:bg-white hover:bg-opacity-20 hover:text-gray-200 ${pathname.split('/')[1] === menu.href.split('/')[1] ? 'text-white' : ''}`
              )}
            >
              {menu.title}
            </NextLink>
          ))}
        </div>
        {session?.user ? (
          <Link
            href={`/${session.user.role === 'GUEST' ? 'user' : session.user.role.toLowerCase()}`}
            className="hidden xl:mt-[20px] xl:inline-flex"
            variant={'default'}
          >
            Dashboard
          </Link>
        ) : (
          <div className="hidden items-center gap-4 xl:flex">
            <Link
              href={'/auth/register'}
              className="hidden xl:mt-[20px] xl:inline-flex"
              variant={'inverse'}
            >
              Daftar
            </Link>
            <Link
              href={'/auth/login'}
              className="hidden xl:mt-[20px] xl:inline-flex"
              variant={'default'}
            >
              Login
            </Link>
          </div>
        )}
        <button
          className="block xl:hidden"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <FaHamburger />
        </button>
      </div>
      <div
        className={cn(
          `z-[800] block h-[300px] w-full bg-black transition-all duration-500 xl:hidden ${isExpanded ? 'mt-0' : '-mt-96'}`
        )}
      >
        <div className="my-[21px] ms-[20px] flex flex-col items-start justify-start gap-2 text-start lg:ms-[52px]">
          {menus.map((navOption) => (
            <NextLink
              key={navOption.title}
              href={navOption.href}
              // Splitted "/a/b" will form an array: ["", "a", "b"], that's why we use the second index as comparation
              className={cn(
                `hover:text-primary-400 rounded-xl text-center text-[16px] transition-all duration-300 ${pathname.split('/')[1] === navOption.href.split('/')[1] ? 'text-white' : ''}`
              )}
              onClick={() => setIsExpanded(false)}
            >
              {navOption.title}
            </NextLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
