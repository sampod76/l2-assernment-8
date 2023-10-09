import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';

import { Order } from '@prisma/client';
import { OrderService } from './OrdersService';

const makeOneOrder = catchAsync(async (req: Request, res: Response) => {
  const orderData = req.body;
  const result = await OrderService.makeOneOrder(orderData);
  

  sendResponse<Order>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Successfully created Order',
    data: result,
  });
});

const getAllOrders = catchAsync(async (req: Request, res: Response) => {
  const userRole: any = req?.user;
 

  const result = await OrderService.getAllOrderss(userRole);
  sendResponse<Order[]>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Orderss retrieved successfully',
    data: result,
  });
});

const getOneOrderById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const userRole: any = req.user;

  const result = await OrderService.getOneOrder(id, userRole);

  sendResponse<Order>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Successfully get Order .`,
    data: result,
  });
});

const updateOrder = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req?.body;

  const result = await OrderService.updateItoDb(id, data);

  sendResponse<Order>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Successfully updated`,
    data: result,
  });
});

const deleteOneFromDb = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await OrderService.deleteOneFromDb(id);
  

  sendResponse<Order>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Successfully deleted `,
    data: result,
  });
});

export const OrderController = {
  makeOneOrder,
  getAllOrders,
  getOneOrderById,
  updateOrder,
  deleteOneFromDb,
};
