import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createUser = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
  });
  return result;
};
const getAllUser = async (): Promise<User[]> => {
  const result = await prisma.user.findMany();
  return result;
};

const getOneUser = async (id: string): Promise<User | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

const UpdateUser = async (
  id: string,
  payload: Partial<User>
): Promise<User> => {


  const result = await prisma.user.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteOneFromDb = async (id: string): Promise<User> => {
  const result = await prisma.user.delete({
    where: {
      id,
    },
  });

  return result;
};

export const UsersService = {
  createUser,
  getAllUser,
  getOneUser,
  UpdateUser,
  deleteOneFromDb,
};
