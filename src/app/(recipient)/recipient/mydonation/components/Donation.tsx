'use client';

import { Button, Link } from '@/app/components/global/button';
import {
  findFilterDonation,
  updateDonation
} from '@/utils/database/donation.query';
import { Prisma } from '@prisma/client';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'sonner';

function debounce(fn: any, delay: number) {
  let timeoutId: any;
  return (...args: any) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

export default function Donation({ recipient_id }: { recipient_id: string }) {
  const [donationsData, setDonationsData] = useState<
    Prisma.DonationGetPayload<{
      include: {
        donor: true;
        recipient: true;
      };
    }>[]
  >([]);
  const [filter, setFilter] = useState<string>('');

  const handleFindAllDonations = async (where: string) => {
    const donations = await findFilterDonation({
      recipient_id,
      OR: [{ name: { contains: where } }]
    });
    setDonationsData(donations);
  };

  const debouncedHandleFindAllDonations = useCallback(
    debounce(handleFindAllDonations, 500),
    []
  );

  useEffect(() => {
    debouncedHandleFindAllDonations(filter);
  }, [filter, debouncedHandleFindAllDonations]);

  const handleRemoveDonation = async (id: string, recipient_id: string) => {
    const toastId = toast.loading('Loading');
    try {
      await updateDonation(
        { id },
        { recipient: { disconnect: { id: recipient_id } } }
      );
      toast.success('Success removing donation', { id: toastId });
      window.location.reload();
    } catch (error) {
      toast.error('Error removing donation', { id: toastId });
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-center text-5xl font-bold text-white">
          Manage Donations
        </h2>
        <input
          type="text"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          className="focus:border-dark rounded-lg border-2 border-white bg-primary p-2 text-white focus:outline-none"
          placeholder="Search Donation"
        />
      </div>
      <div className="flex flex-col gap-y-4">
        {donationsData &&
          donationsData.map((donation, index) => (
            <div
              className="flex w-full gap-x-2 rounded-lg border-2 border-white p-2"
              key={index}
            >
              <Image
                src="/dummy.jpeg"
                alt="donation"
                width={500}
                height={500}
                className="w-1/4 rounded-lg object-cover"
              />
              <div className="grid w-full grid-cols-1 content-between gap-y-4 text-white">
                <div className="flex flex-col">
                  <h2 className="text-3xl font-semibold">{donation.name}</h2>
                  <p className="text-lg">{donation.description}</p>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-lg font-medium">
                      By {donation.donor.name}
                    </p>
                    <p className="text-sm">{donation.donor.description}</p>
                  </div>
                  <div className="flex gap-4">
                    <Link
                      href={`/recipient/mydonation/${donation.id}`}
                      className="xl:mt-[20px] xl:inline-flex"
                      variant={'default'}
                    >
                      Details Donation
                    </Link>
                    <Button
                      onClick={() =>
                        handleRemoveDonation(
                          donation.id,
                          donation.recipient_id!
                        )
                      }
                      className="xl:mt-[20px] xl:inline-flex"
                      variant={'inverse'}
                    >
                      Remove Donation
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
