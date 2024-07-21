'use client';

import { Role, User } from '@prisma/client';
import { toast } from 'sonner';

import { handleUpdateUser } from '@/utils/actions/user';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Form({ user }: { user: User }) {
  const { data: session, update } = useSession();
  const router = useRouter();

  return (
    <form
      action={async (formData) => {
        const toastId = toast.loading('Loading');

        const role = formData.get('role') as Role;

        console.log(role);

        if (role === 'ADMIN' || role === 'GUEST') {
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
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          className="rounded-lg border-2 border-secondary p-2 focus:border-dark focus:outline-none"
          defaultValue={user.email}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          id="password"
          className="rounded-lg border-2 border-secondary p-2 focus:border-dark focus:outline-none"
          placeholder="Update password"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="role">Role</label>
        <select
          name="role"
          id="role"
          className="rounded-lg border-2 border-secondary p-2 focus:border-dark focus:outline-none"
          defaultValue={user.role === 'GUEST' ? 'VOLUNTEER' : user.role}
        >
          <option value="DONOR">Donor</option>
          <option value="RECIPIENT">Recipient</option>
          <option value="VOLUNTEER">Volunteer</option>
        </select>
      </div>
      <button
        type="submit"
        className="mt-4 w-fit rounded-lg bg-secondary px-8 py-4 text-[#FFFBF2]"
      >
        Update
      </button>
    </form>
  );
}
