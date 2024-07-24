'use client';

import { H4, P } from '@/app/components/global/text';
import { cn } from '@/utils/cn';
import {
  deleteTracking,
  findDonationTracking
} from '@/utils/database/tracking.query';
import { Tracking } from '@prisma/client';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function TrackingData({ donation_id }: { donation_id: string }) {
  const [tracking, setTracking] = useState<Tracking[]>();

  const findTracking = async () => {
    setTracking(await findDonationTracking({ donation_id }));
  };

  useEffect(() => {
    findTracking();
  }, []);

  const dateFormat = (createdAt: Date) => {
    const date = new Date(createdAt);

    const formatter = new Intl.DateTimeFormat('id-ID', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'Asia/Jakarta',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'shortGeneric'
    });

    return formatter.format(date);
  };

  const handleDeleteTracking = async (id: string) => {
    const toastId = toast.loading('Loading');
    try {
      await deleteTracking({ id });
      toast.success('Success deleting tracking', {
        id: toastId,
        duration: 1500
      });
      window.location.reload();
    } catch (error) {
      toast.error('Error deleting tracking', { id: toastId });
    }
  };

  return (
    <main className="flex h-screen w-full flex-col gap-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-center text-5xl font-bold text-white">
          Lacak Donasi
        </h2>
      </div>
      <div className="flex flex-col gap-y-4">
        <ol
          className={cn('relative text-gray-400 ml-4 border-s border-gray-300')}
        >
          {tracking &&
            tracking.map((track, index) => (
              <li key={index} className="mb-10 ms-6">
                <span
                  className={cn(
                    'absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full', index === tracking.length - 1 ? "bg-green-800" : "bg-gray-800"
                  )}
                >
                </span>
                <H4 className="font-medium leading-tight">
                  {track.description}
                </H4>
                <P className="text-sm">{dateFormat(track.createdAt)}</P>
              </li>
            ))}
        </ol>
      </div>
    </main>
  );
}
