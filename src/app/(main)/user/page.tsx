'use server';

import { nextGetServerSession } from '@/lib/next-auth';
import { findUser } from '@/utils/database/user.query';
import React from 'react';
import Form from './components/Form';
import { notFound } from 'next/navigation';

export default async function page() {
  const session = await nextGetServerSession();

  const user = await findUser({ id: session?.user?.id });

  if (!user) return notFound();

  return (
    <main className="h-screen w-screen bg-blue-300 px-20 pt-20">
      <Form user={user} />
    </main>
  );
}
