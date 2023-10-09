import { Order } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';
import { IOrder } from './OrderInterface';


const makeOneOrder = async (data: IOrder): Promise<Order> => {
  const result = await prisma.order.create({
    data: {
      userId: data.userId,
      orderedBooks: {
        create: data?.orderedBooks.map(book => ({
          bookId: book.bookId,
          quantity: book.quantity,
        })),
      },
    },
    include: {
      orderedBooks: true,
    },
  });

  return result;
};
const getAllOrderss = async (
  userRole: { role: string; userId: string } | null
): Promise<Order[]> => {

  if (userRole?.role === 'admin') {
    const result = await prisma.order.findMany({
      include: {
        orderedBooks: true,
      },
    });

    return result;
  }

  const currentUserExits = await prisma.user.findUnique({
    where: {
      id: userRole?.userId,
    },
  });


  if (!currentUserExits) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User does not exits');
  }

  const result = await prisma.order.findMany({
    where: {
      userId: userRole?.userId,
    },
    include: {
      orderedBooks: true,
    },
  });

  return result;
};

const getOneOrder = async (
  id: string,
  userRole: { role: string; userId: string } | null
): Promise<Order | null> => {



  if (userRole?.role === 'admin') {
    const result = await prisma.order.findUnique({
      where: {
        id,
      },
      include: {
        orderedBooks: true,
      },
    });

    return result;
  }

  const result = await prisma.order.findMany({
    where: {
      userId: userRole?.userId,
      id,
    },
    include: {
      orderedBooks: true,
    },
  });

  return result[0];
};

const updateItoDb = async (
  id: string,
  payload: Partial<Order>
): Promise<Order> => {
  

  const result = await prisma.order.update({
    where: {
      id,
    },
    data: payload,
    include: {
      orderedBooks: true,
    },
  });

  return result;
};

const deleteOneFromDb = async (id: string): Promise<Order> => {
  const result = await prisma.order.delete({
    where: {
      id,
    },
    include: {
      orderedBooks: true,
    },
  });

  return result;
};

export const OrderService = {
  makeOneOrder,
  getAllOrderss,
  getOneOrder,
  updateItoDb,
  deleteOneFromDb,
};
