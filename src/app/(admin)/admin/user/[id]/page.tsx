'use server';

import { getUser } from '@/utils/query/user';
import React from 'react';
import UserForm from './components/UserForm';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';

export default async function page({ params }: { params: { id: string } }) {
  if (params.id === 'new') {
    return (
      <main className="flex min-h-screen w-screen flex-col gap-y-8 p-4 pl-[316px]">
        <Breadcrumbs />
        <UserForm />
      </main>
    );
  }

  const user = await getUser({ id: params.id });

  if (!user) {
    return notFound();
  }

  return (
    <main className="flex min-h-screen w-screen flex-col gap-y-8 p-4 pl-[316px]">
      <Breadcrumbs />
      <UserForm user={user} />
    </main>
  );
}
