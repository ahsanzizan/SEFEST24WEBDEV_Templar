import Image from 'next/image';
import NextLink from 'next/link';

import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { H4, P } from '@/app/components/global/text';

function FooterLink({ href, text }: { href: string; text: string }) {
  return (
    <NextLink href={href} className={'group'}>
      <P className="transition-all duration-300 group-hover:text-primary group-hover:underline">
        {text}
      </P>
    </NextLink>
  );
}

export default function Footer() {
  return (
    <footer className="flex w-screen flex-col gap-y-10 bg-[#fffbf2] p-4 py-10 sm:px-20">
      <Image
        src={'/assets/logo-dark.svg'}
        alt="Logo FeedForward"
        width={120}
        height={50}
        className="h-[50px] w-[200px] transition-all duration-500 hover:scale-105"
      />
      <div className="flex w-full flex-col justify-between gap-8 md:flex-row">
        <P className="w-full md:w-1/3">
          Memanfaatkan Teknologi Digital untuk Menjembatani Kesenjangan Antara
          Surplus Pangan dan Kerawanan Pangan
        </P>

        <div className="flex flex-col gap-y-2">
          <H4 className="text-[#001e16]">Contact</H4>
          <FooterLink
            href="mailto:hello@feedforward.com"
            text="hello@feedforward.com"
          />
          <FooterLink
            href="https://wa.me/6289509631605"
            text="+62 895 0963 1605"
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <H4 className="text-[#001e16]">Useful Links</H4>
          <FooterLink href="/" text="Home" />
        </div>

        <div className="flex flex-col gap-y-2">
          <H4 className="text-[#001e16]">Socials</H4>
          <FooterLink
            href="https://instagram.com/feedforward"
            text="Instagram"
          />
          <FooterLink href="https://x.com/feedforward" text="X" />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 md:flex-nowrap">
        <div className="flex gap-x-4">
          <FaInstagram
            width={500}
            height={500}
            className="w-8 cursor-pointer rounded-full transition-all duration-100 hover:scale-105"
          />
          <FaFacebook
            width={500}
            height={500}
            className="w-8 cursor-pointer rounded-full transition-all duration-100 hover:scale-105"
          />
          <FaLinkedin
            width={500}
            height={500}
            className="w-8 cursor-pointer rounded-full transition-all duration-100 hover:scale-105"
          />
        </div>
        <div className="h-0.5 w-full rounded-full bg-[#475443]"></div>
        <P className="text-nowrap text-[#475443]">
          &copy; 2024 FeedForward All rights reserved.
        </P>
      </div>
    </footer>
  );
}
