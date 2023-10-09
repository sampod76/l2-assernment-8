import { Category } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { CategoryService } from './CategoryService';

const CreateCategory = catchAsync(async (req: Request, res: Response) => {
  const categoryData = req.body;
  const result = await CategoryService.createBookCategory(categoryData);
  
  sendResponse<Category>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Successfully created Category',
    data: result,
  });
});

const getAllCategories = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.getAllCategory();

  sendResponse<Category[]>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Successfully get Categories',
    data: result,
  });
});

const getOneDataById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await CategoryService.getOneCategory(id);

  sendResponse<Category>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Successfully get Category `,
    data: result,
  });
});

const updateOneCatagoryDb = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updateData = req?.body;
  const result = await CategoryService.updateOneCategory(id, updateData);
 
  sendResponse<Category>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Successfully updated Category`,
    data: result,
  });
});

const deleteOneFromDb = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await CategoryService.deleteOneFromDb(id);
 
  sendResponse<Category>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Category deleted successfully`,
    data: result,
  });
});

export const CategoryController = {
  CreateCategory,
  getAllCategories,
  getOneDataById,
  updateOneCatagoryDb,
  deleteOneFromDb,
};
