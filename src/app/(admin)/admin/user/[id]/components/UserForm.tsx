'use client';

import { User } from '@prisma/client';
import { toast } from 'sonner';

import { handleCreateUser, handleUpdateUser } from '@/utils/actions/user';

export default function UserForm({ user }: { user?: User }) {
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
          } catch (error) {
            toast.error('Error creating user', { id: toastId });
          }
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
          required={!user}
          className="rounded-lg border-2 border-secondary p-2 focus:border-dark focus:outline-none"
          defaultValue={user && user.email}
        />
      </div>
      <label htmlFor="password">Password</label>
      <input
        type="text"
        name="password"
        id="password"
        required={!user}
        className="rounded-lg border-2 border-secondary p-2 focus:border-dark focus:outline-none"
        placeholder={user && 'New password'}
      />
      <label htmlFor="role">Role</label>
      <select
        name="role"
        id="role"
        required={!user}
        className="rounded-lg border-2 border-secondary p-2 focus:border-dark focus:outline-none"
        defaultValue={user && user.role}
      >
        <option value="ADMIN">Admin</option>
        <option value="DONOR">Donor</option>
        <option value="RECIPIENT">Recipient</option>
        <option value="VOLUNTEER">Volunteer</option>
      </select>
      <button
        type="submit"
        className="mt-4 w-fit rounded-lg bg-secondary px-8 py-4 text-[#FFFBF2]"
      >
        {user ? 'Update' : 'Create'}
      </button>
    </form>
  );
}
