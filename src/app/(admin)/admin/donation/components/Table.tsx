'use client';

import { Donation, User } from '@prisma/client';
import DataTable, { TableColumn } from 'react-data-table-component';
import { toast } from 'sonner';

import { useEffect, useState } from 'react';
import { deleteUser } from '@/utils/database/user.query';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Table({ donations }: { donations: Donation[] }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const columns: TableColumn<Donation>[] = [
    {
      name: 'Id',
      selector: (row: Donation) => row.id,
      sortable: true
    },
    {
      name: 'Email',
      selector: (row: Donation) => row.name,
      sortable: true
    },
    {
      name: 'Email',
      selector: (row: Donation) => row.donor_id,
      sortable: true
    },
    {
      name: 'Email',
      selector: (row: Donation) => row.recipient_id,
      sortable: true
    },
    {
      name: 'Role',
      selector: (row: Donation) => row.pickup_coordinate!,
      sortable: true
    },
    {
      name: 'Role',
      selector: (row: Donation) => row.pickup_status!,
      sortable: true
    },
    {
      name: 'Action',
      cell: (row: Donation) => (
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={() => {
              handleDeleteUser(row.id);
            }}
            className="h-fit w-fit rounded-lg bg-red-500 px-4 py-2 text-[#FFFBF2]"
          >
            Delete
          </button>
          <Link
            href={'/admin/user/' + row.id}
            className="h-fit w-fit rounded-lg bg-yellow-500 px-4 py-2 text-[#FFFBF2]"
          >
            Update
          </Link>
        </div>
      )
    }
  ];

  const handleDeleteUser = async (id: string) => {
    const toastId = toast.loading('Loading');
    try {
      await deleteUser({ id });
      toast.success('Success deleting user', { id: toastId, duration: 1500 });
      router.refresh();
    } catch (error) {
      toast.error('Error deleting user', { id: toastId });
    }
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <p>Loading</p>;

  return (
    <div>
      <DataTable
        columns={columns}
        data={donations}
        pagination
        highlightOnHover
      />
    </div>
  );
}
