'use server';

import prisma from '@/lib/prisma';
import { Prisma } from '@prisma/client';
import { hashSync } from 'bcryptjs';

export const getAllUser = async () => {
  return await prisma.user.findMany();
};

export const getUser = async (where: Prisma.UserWhereUniqueInput) => {
  return await prisma.user.findUnique({ where });
};

export const createUser = async (data: Prisma.UserCreateInput) => {
  return await prisma.user.create({
    data: {
      ...data,
      password: data.password ? hashSync(data.password, 12) : undefined
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
        ? hashSync(data.password as string, 12)
        : undefined
    }
  });
};

export const deleteUser = async (where: Prisma.UserWhereUniqueInput) => {
  return await prisma.user.delete({ where });
};
