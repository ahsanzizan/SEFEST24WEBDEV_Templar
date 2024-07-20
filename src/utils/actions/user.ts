'use server';

import { Role } from '@prisma/client';
import { createUser, updateUser } from '../database/user.query';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const handleCreateUser = async (formData: FormData) => {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const role = formData.get('role') as Role;

  await createUser({ email, role, password });
  revalidatePath('/', 'layout');
  redirect('/admin/user');
};

export const handleUpdateUser = async (id: string, formData: FormData) => {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const role = formData.get('role') as Role;

  await updateUser({ id }, { email, role, password });
  revalidatePath('/', 'layout');
  redirect('/admin/user');
};
