'use client';

import dynamic from 'next/dynamic';
import { useCallback } from 'react';
import { Donation, User } from '@prisma/client';
import { toast } from 'sonner';

import { handleCreateUser, handleUpdateUser } from '@/utils/actions/user';
import { findAllDonor, findDonor } from '@/utils/database/user.query';

const AsyncSelect = dynamic(() => import('react-select/async'), { ssr: false });

export default function Form({ donation }: { donation?: Donation }) {
  const promiseOptions = (inputValue: string) =>
    new Promise<Array<{ label: string; value: string }>>(async (resolve) => {
      if (!inputValue) {
        await findAllDonor().then((response) => {
          let data = response.map((item: User) => {
            return {
              label: item.email,
              value: item.id
            };
          });
          resolve(data);
        });
      } else {
        await findDonor(inputValue).then((response) => {
          let data = response.map((item: User) => {
            return {
              label: item.email,
              value: item.id
            };
          });
          resolve(data);
        });
      }
    });

  function debounce(fn: any, delay = 250) {
    let timeout: any;

    return (...args: any) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  }

  const loadOptionsDebounced = useCallback(
    debounce((inputValue: string, callback: (options: any) => void) => {
      promiseOptions(inputValue).then((options: any) => callback(options));
    }, 500),
    []
  );

  return (
    <form
      action={async (formData) => {
        const toastId = toast.loading('Loading');
        if (donation) {
          try {
            await handleUpdateUser(donation.id, formData);
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
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="rounded-lg border-2 border-secondary p-2 focus:border-dark focus:outline-none"
          defaultValue={donation && donation.name}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="donor_id">Donor Id</label>
        <input
          type="text"
          name="donor_id"
          id="donor_id"
          required
          className="rounded-lg border-2 border-secondary p-2 focus:border-dark focus:outline-none"
          defaultValue={donation && donation.donor_id}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="donor_id">Donor Id</label>
        <AsyncSelect
          defaultValue={donation && donation.donor_id}
          cacheOptions
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderRadius: 8,
              border: '2px solid #475443',
              padding: 4,
              borderColor: state.isFocused ? '#001E16' : '#475443'
            })
          }}
          placeholder="Select user"
          id="donor_id"
          name="donor_id"
          defaultOptions
          loadOptions={loadOptionsDebounced}
          noOptionsMessage={() => 'Donators not found'}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="recipient_id">Recipient Id</label>
        <input
          type="text"
          name="recipient_id"
          id="recipient_id"
          required
          className="rounded-lg border-2 border-secondary p-2 focus:border-dark focus:outline-none"
          defaultValue={donation && donation.recipient_id}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="recipient_id">Recipient Id</label>
        <input
          type="text"
          name="recipient_id"
          id="recipient_id"
          required
          className="rounded-lg border-2 border-secondary p-2 focus:border-dark focus:outline-none"
          defaultValue={donation && donation.pickup_coordinate!}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="role">Role</label>
        <select
          name="role"
          id="role"
          required={!donation}
          className="rounded-lg border-2 border-secondary p-3 focus:border-dark focus:outline-none"
          defaultValue={
            donation && donation.pickup_status
              ? donation.pickup_status
              : 'NOTSET'
          }
        >
          <option value="NOTSET">Not set</option>
          <option value="CONFIRMED">Confirmed</option>
          <option value="REJECTED">Rejected</option>
        </select>
      </div>
      <button
        type="submit"
        className="mt-4 w-fit rounded-lg bg-secondary px-8 py-4 text-[#FFFBF2]"
      >
        {donation ? 'Update' : 'Create'}
      </button>
    </form>
  );
}
