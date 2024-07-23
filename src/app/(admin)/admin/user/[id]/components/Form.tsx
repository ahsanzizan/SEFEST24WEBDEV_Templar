'use client';

import { User } from '@prisma/client';
import { toast } from 'sonner';

import { handleCreateUser, handleUpdateUser } from '@/utils/actions/user';
import { useRouter } from 'next/navigation';
import { Button } from '@/app/components/global/button';

export default function Form({ user }: { user?: User }) {
  const router = useRouter();

  return (
    <form
      action={async (formData) => {
        const toastId = toast.loading('Loading');
        if (user) {
          try {
            await handleUpdateUser(user.id, formData);
            toast.success('Success updating user', {
              id: toastId,
              duration: 1500
            });
            router.push('/admin/user');
          } catch (error) {
            toast.error('Error updating user', { id: toastId });
          }
        } else {
          try {
            await handleCreateUser(formData);
            toast.success('Success creating user', {
              id: toastId,
              duration: 1500
            });
            router.push('/admin/user');
          } catch (error) {
            toast.error('Error creating user', { id: toastId });
          }
        }
      }}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-white">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="focus:border-dark rounded-lg border-2 border-white bg-primary p-2 text-white focus:outline-none"
          defaultValue={user && user.email}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-white">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="focus:border-dark rounded-lg border-2 border-white bg-primary p-2 text-white focus:outline-none"
          defaultValue={user && user.name!}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="description" className="text-white">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          required
          className="focus:border-dark rounded-lg border-2 border-white bg-primary p-2 text-white focus:outline-none"
          defaultValue={user && user.description!}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-white">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          required={!user}
          className="focus:border-dark rounded-lg border-2 border-white bg-primary p-2 text-white focus:outline-none"
          placeholder={user && 'New password'}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="role" className="text-white">
          Role
        </label>
        <select
          name="role"
          id="role"
          required
          className="focus:border-dark rounded-lg border-2 border-white bg-primary p-2 text-white focus:outline-none"
          defaultValue={user ? user.role : 'GUEST'}
        >
          <option value="ADMIN">Admin</option>
          <option value="DONOR">Donor</option>
          <option value="RECIPIENT">Recipient</option>
          <option value="VOLUNTEER">Volunteer</option>
          <option value="GUEST">Guest</option>
        </select>
      </div>
      <Button type="submit" variant={'default'}>
        {user ? 'Update' : 'Create'}
      </Button>
    </form>
  );
}
