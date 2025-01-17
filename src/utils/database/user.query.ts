'use server';

import prisma from '@/lib/prisma';
import { encrypt } from '@/utils/encryption';
import { Prisma } from '@prisma/client';

export const findAllUser = async () => {
  return await prisma.user.findMany();
};

export const findAllDonor = async () => {
  return await prisma.user.findMany({
    where: { OR: [{ role: 'DONOR' }, { role: 'VOLUNTEER' }] }
  });
};

export const findAllRecipient = async () => {
  return await prisma.user.findMany({ where: { role: 'RECIPIENT' } });
};

export const findDonor = async (filter: string) => {
  return await prisma.user.findMany({
    where: {
      AND: [
        { email: { contains: filter } },
        { OR: [{ role: 'DONOR' }, { role: 'VOLUNTEER' }] }
      ]
    }
  });
};

export const findRecipient = async (filter: string) => {
  return await prisma.user.findMany({
    where: { AND: [{ email: { contains: filter } }, { role: 'RECIPIENT' }] }
  });
};

export const findUser = async (where: Prisma.UserWhereUniqueInput) => {
  return await prisma.user.findUnique({ where });
};

export const createUser = async (data: Prisma.UserCreateInput) => {
  return await prisma.user.create({
    data: {
      ...data,
      password: data.password ? await encrypt(data.password) : undefined
    }
  });
};

export const updateUser = async (
  where: Prisma.UserWhereUniqueInput,
  data: Prisma.UserUpdateInput
) => {
  return await prisma.user.update({
    where,
    data: {
      ...data,
      password: data.password
        ? await encrypt(data.password as string)
        : undefined
    }
  });
};

export const deleteUser = async (where: Prisma.UserWhereUniqueInput) => {
  return await prisma.user.delete({ where });
};
