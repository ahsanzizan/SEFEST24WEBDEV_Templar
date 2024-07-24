'use client';

import { User } from '@prisma/client';
import DataTable, { TableColumn } from 'react-data-table-component';
import { toast } from 'sonner';

import { useEffect, useState } from 'react';
import { deleteUser } from '@/utils/database/user.query';
import { useRouter } from 'next/navigation';
import { customStyles } from '@/utils/reactDataTable';
import { Button, Link } from '@/app/components/global/button';

export default function Table({ users }: { users: User[] }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const columns: TableColumn<User>[] = [
    {
      name: 'Id',
      selector: (row) => row.id,
      sortable: true
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      sortable: true
    },
    {
      name: 'Name',
      selector: (row) => row.name!,
      sortable: true
    },
    {
      name: 'Role',
      selector: (row) => row.role,
      sortable: true
    },
    {
      name: 'Action',
      cell: (row) => (
        <div className="flex w-full items-center justify-end gap-2 text-nowrap">
          <Link
            variant={'info'}
            href={'/admin/user/' + row.id}
            className="h-fit w-fit rounded-lg px-4 py-2"
          >
            Details
          </Link>
          <Button
            onClick={() => {
              handleDeleteUser(row.id);
            }}
            className="h-fit w-fit rounded-lg px-4 py-2"
            variant={'danger'}
          >
            Delete
          </Button>
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
        className="border-t-2 border-white"
        columns={columns}
        data={users}
        pagination
        customStyles={customStyles}
      />
    </div>
  );
}
