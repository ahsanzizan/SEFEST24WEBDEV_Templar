'use client';

import { Role, User } from '@prisma/client';
import { toast } from 'sonner';

import { handleUpdateUser } from '@/utils/actions/user';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Button } from '@/app/components/global/button';

export default function Form({ user }: { user: User }) {
  const { data: session, update } = useSession();
  const router = useRouter();

  return (
    <form
      action={async (formData) => {
        const toastId = toast.loading('Loading');

        let role = formData.get('role') as Role;
        if (!role) {
          formData.append('role', user.role);
          role = user.role;
        }

        if (user.role !== 'ADMIN' && (role === 'ADMIN' || role === 'GUEST')) {
          return toast.error('Error, invalid role', { id: toastId });
        }

        try {
          await handleUpdateUser(user.id, formData);
          toast.success('Success updating user', {
            id: toastId,
            duration: 1500
          });
          await update({ ...session, user: { ...session?.user, Role: role } });
          router.push('/' + role.toLowerCase());
        } catch (error) {
          toast.error('Error updating user', { id: toastId });
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
          className="focus:border-dark rounded-lg border-2 border-white bg-primary p-2 text-white focus:outline-none"
          defaultValue={user.email}
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
          className="focus:border-dark rounded-lg border-2 border-white bg-primary p-2 text-white focus:outline-none"
          placeholder="Update password"
        />
      </div>
      {user && user.role === 'GUEST' && (
        <div className="flex flex-col gap-2">
          <label htmlFor="role" className="text-white">
            Role
          </label>
          <select
            name="role"
            id="role"
            className="focus:border-dark rounded-lg border-2 border-white bg-primary p-2 text-white focus:outline-none"
            defaultValue={user.role}
          >
            <option value="DONOR">Donor</option>
            <option value="RECIPIENT">Recipient</option>
            <option value="VOLUNTEER">Volunteer</option>
          </select>
        </div>
      )}
      {user && user.role === 'RECIPIENT' && (
        <div className="flex flex-col gap-2">
          <label htmlFor="request_donation" className="text-white">
            Request Donation
          </label>
          <select
            name="request_donation"
            id="request_donation"
            className="focus:border-dark rounded-lg border-2 border-white bg-primary p-2 text-white focus:outline-none"
            defaultValue={user.request_donation ? 'true' : 'false'}
          >
            <option value="false">Not Request</option>
            <option value="true">Request</option>
          </select>
        </div>
      )}
      <Button type="submit" variant={'default'}>
        Update
      </Button>
    </form>
  );
}
