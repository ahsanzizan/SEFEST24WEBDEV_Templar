'use client';

import dynamic from 'next/dynamic';
import { useCallback } from 'react';
import { Prisma, User } from '@prisma/client';
import { toast } from 'sonner';

import {
  findAllDonor,
  findAllRecipient,
  findDonor,
  findRecipient
} from '@/utils/database/user.query';
import {
  handleCreateDonation,
  handleUpdateDonation
} from '@/utils/actions/donation';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Button } from '@/app/components/global/button';
import { H2, H4, P } from '@/app/components/global/text';

const AsyncSelect = dynamic(() => import('react-select/async'), { ssr: false });

export default function Form({
  donation
}: {
  donation?: Prisma.DonationGetPayload<{
    include: { donor: true; recipient: true };
  }>;
}) {
  const { data: session } = useSession();
  const router = useRouter();

  const donorPromiseOptions = (inputValue: string) =>
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

  const recipientPromiseOptions = (inputValue: string) =>
    new Promise<Array<{ label: string; value: string }>>(async (resolve) => {
      if (!inputValue) {
        await findAllRecipient().then((response) => {
          let data = response.map((item: User) => {
            return {
              label: item.email,
              value: item.id
            };
          });
          resolve(data);
        });
      } else {
        await findRecipient(inputValue).then((response) => {
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

  const donorLoadOptionsDebounced = useCallback(
    debounce((inputValue: string, callback: (options: any) => void) => {
      donorPromiseOptions(inputValue).then((options: any) => callback(options));
    }, 500),
    []
  );

  const recipientLoadOptionsDebounced = useCallback(
    debounce((inputValue: string, callback: (options: any) => void) => {
      recipientPromiseOptions(inputValue).then((options: any) =>
        callback(options)
      );
    }, 500),
    []
  );

  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex items-center justify-between">
        <H2>Detail Donasi</H2>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-white">
            Nama
          </label>
          <H4 id="name" className="rounded-lg text-white">
            {donation?.name}
          </H4>
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="text-white">
            Deskripsi
          </label>
          <H4 id="description" className="rounded-lg text-white">
            {donation?.description}
          </H4>
        </div>
        <div className="flex flex-col">
          <label htmlFor="donator" className="text-white">
            Pendonor
          </label>
          <H4 id="donator" className="rounded-lg text-white">
            {donation?.donor.name}
          </H4>
        </div>
        <div className="flex flex-col">
          <label htmlFor="pickup_coordinate" className="text-white">
            Lokasi Penerimaan
          </label>
          <H4 id="pickup_coordinate" className="rounded-lg text-white">
            {donation?.pickup_coordinate
              ? donation?.pickup_coordinate
              : 'Lokasi Penerimaan Belum Diseting'}
          </H4>
        </div>
        <div className="flex flex-col">
          <label htmlFor="pickup_status" className="text-white">
            Status Penerimaan
          </label>
          <H4 id="pickup_status" className="rounded-lg text-white">
            {donation?.pickup_status === 'CONFIRMED'
              ? 'Sudah Dikonfirmasi'
              : donation?.pickup_status === 'RECIEVED'
                ? 'Sudah Diterima'
                : donation?.pickup_status === 'REJECTED'
                  ? 'Ditolak'
                  : 'Belum Dikonfirmasi'}
          </H4>
        </div>
      </div>
    </div>
  );
}
