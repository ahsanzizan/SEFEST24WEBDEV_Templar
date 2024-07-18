import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="flex w-screen flex-col gap-y-10 bg-[#fffbf2] px-20 py-10">
      <div className="flex items-center gap-x-2">
        <Image
          src="/dummy.jpeg"
          alt="Logo"
          width={500}
          height={500}
          className="h-10 w-10 rounded-full"
        />
        <p className="text-2xl font-semibold text-[#ea9715]">FeedForward</p>
      </div>
      <div className="flex w-full justify-between gap-x-8">
        <p className="w-2/6 text-justify text-lg text-[#475443]">
          Connect food donors (restaurants, grocery stores, etc) with food banks
          and shelters. Connect food donors (restaurants, grocery stores, etc)
          with food banks and shelters.
        </p>
        <div className="flex flex-col gap-y-2">
          <p className="text-xl font-medium text-[#001e16]">Contact</p>
          <p className="text-lg text-[#475443]">Contact@example.com</p>
          <p className="text-lg text-[#475443]">08123456789</p>
          <p className="text-lg text-[#475443]">Contact</p>
          <p className="text-lg text-[#475443]">Contact</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-xl font-medium text-[#001e16]">Socials</p>
          <p className="text-lg text-[#475443]">Contact</p>
          <p className="text-lg text-[#475443]">Contact</p>
          <p className="text-lg text-[#475443]">Contact</p>
          <p className="text-lg text-[#475443]">Contact</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-xl font-medium text-[#001e16]">blabla</p>
          <p className="text-lg text-[#475443]">Contact</p>
          <p className="text-lg text-[#475443]">Contact</p>
          <p className="text-lg text-[#475443]">Contact</p>
          <p className="text-lg text-[#475443]">Contact</p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <Image
          src="/dummy.jpeg"
          alt="Socials"
          width={500}
          height={500}
          className="w-8 rounded-full"
        />
        <Image
          src="/dummy.jpeg"
          alt="Socials"
          width={500}
          height={500}
          className="w-8 rounded-full"
        />
        <Image
          src="/dummy.jpeg"
          alt="Socials"
          width={500}
          height={500}
          className="w-8 rounded-full"
        />
        <div className="h-0.5 w-full rounded-full bg-[#475443]"></div>
        <p className="text-nowrap text-[#475443]">
          Copyright © 2024 FeedForward All rights reserved.
        </p>
      </div>
    </footer>
  );
}
