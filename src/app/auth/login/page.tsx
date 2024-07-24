'use client';

import { Button } from '@/app/components/global/button';
import { Input } from '@/app/components/global/input';
import { H3, P } from '@/app/components/global/text';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'sonner';
import { FaGoogle } from 'react-icons/fa';

export default function Login() {
  const { status } = useSession();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  if (status === 'authenticated') return redirect('/');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const toastId = toast.loading('Loading...');

    try {
      setLoading(true);
      const res = await signIn('credentials', {
        redirect: false,
        callbackUrl: '/',
        ...formValues
      });

      setLoading(false);
      if (res?.error) {
        toast.error(
          res.error == 'CredentialsSignin'
            ? 'Wrong Username / Password'
            : 'Internal server error',
          {
            id: toastId
          }
        );
      } else {
        toast.success('Login successfully', { id: toastId });
      }
    } catch (error) {
      toast.error('Something Wrong', {
        id: toastId
      });
    }
  };

  return (
    <section
      id="login"
      className="flex w-screen items-center justify-center py-20"
    >
      <div className="m-auto flex flex-col gap-y-8 rounded-xl border border-gray-400 bg-primary p-5">
        <form className="w-[420px]" onSubmit={handleSubmit}>
          <div className="mb-8">
            <Link href={'/'}>
              <Image
                src={'/assets/icon.svg'}
                alt="Logo FeedForward"
                width={120}
                height={120}
                className="pointer-events-none mb-5 h-[80px] w-[80px]"
              />
            </Link>
            <H3 className="mb-4 w-full">Masuk ke FeedForward</H3>
            <P className="w-full">
              Selamat datang kembali! Masuk untuk kembali berkontribusi pada
              kampanye anti-kelaparan
            </P>
          </div>
          <div className="mb-10 flex flex-col gap-4">
            <Input
              onChange={handleChange}
              type="email"
              label="Email"
              name="email"
              placeholder="email@example.com"
            />
            <Input
              onChange={handleChange}
              type="password"
              label="Password"
              name="password"
              placeholder="******"
            />
          </div>
          <Button
            disabled={loading}
            type="submit"
            variant={'default'}
            className="flex w-full justify-center"
          >
            Masuk
          </Button>
        </form>
        <div className="flex flex-row items-center justify-center gap-x-4">
          <div className="h-0.5 w-full rounded-full bg-white"></div>
          <p className="text-white">Atau</p>
          <div className="h-0.5 w-full rounded-full bg-white"></div>
        </div>
        <div className="flex flex-col gap-y-4">
          <Button
            onClick={() => signIn('google', { callbackUrl: '/user' })}
            variant={'inverse'}
            className="flex w-full items-center justify-center gap-2"
          >
            <FaGoogle /> Google
          </Button>
        </div>
      </div>
    </section>
  );
}
