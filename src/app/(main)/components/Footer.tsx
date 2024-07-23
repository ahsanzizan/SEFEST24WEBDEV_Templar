import Image from 'next/image';
import NextLink from 'next/link';

import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Link } from '@/app/components/global/button';
import { H4, P } from '@/app/components/global/text';

export default function Footer() {
  return (
    <footer className="flex w-screen flex-col gap-y-10 bg-[#fffbf2] px-20 py-10">
      <Image
        src={'/assets/logo-dark.svg'}
        alt="Logo moklet.org"
        width={120}
        height={50}
        className="h-[50px] w-[200px] transition-all duration-500 hover:scale-105"
      />
      <div className="flex w-full justify-between gap-x-8">
        <P className="w-2/6">
          Memanfaatkan Teknologi Digital untuk Menjembatani Kesenjangan Antara
          Surplus Pangan dan Kerawanan Pangan
        </P>

        <div className="flex flex-col gap-y-2">
          <H4 className="text-[#001e16]">Contact</H4>
          <NextLink href="/">
            <P>skibidi@example.com</P>
          </NextLink>
          <NextLink href="">
            <P>08123456789</P>
          </NextLink>
          <NextLink href="">
            <P>Contact</P>
          </NextLink>
        </div>

        <div className="flex flex-col gap-y-2">
          <H4 className="text-[#001e16]">Useful Links</H4>
          <NextLink href="">
            <P>Home</P>
          </NextLink>
        </div>

        <div className="flex flex-col gap-y-2">
          <H4 className="text-[#001e16]">Socials</H4>
          <NextLink href="">
            <P>Contact</P>
          </NextLink>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
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
        <div className="h-0.5 w-full rounded-full bg-[#475443]"></div>
        <P className="text-nowrap text-[#475443]">
          Copyright &copy; 2024 FeedForward All rights reserved.
        </P>
      </div>
    </footer>
  );
}
