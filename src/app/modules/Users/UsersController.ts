/* eslint-disable no-unused-vars */

import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { UsersService } from "./UsersService";
import { User } from "@prisma/client";

const CreateUser = catchAsync(async (req: Request, res: Response) => {
  const userData = req.body;
  const result = await UsersService.createUser(userData)

  sendResponse<User>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Successfully created Users',
    data: result,
  });
});


const getAllUsers = catchAsync(async (req: Request, res: Response) => {
 
  const result = await UsersService.getAllUser()


  const newArray = result.map(({ password, ...rest }) => rest);

  sendResponse<Partial<User>[]>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Successfully Fetched Users data',
    data: newArray,
  });
});



const getOneUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await UsersService.getOneUser(id);

  sendResponse<User>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Successfully get user.`,
    data: result,
  });
});

const updateUserData = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  
const data = req?.body;

  const result = await UsersService.UpdateUser(id,data);

  const {password,...resData} = result;
 

  sendResponse<Partial<User>>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `User updated successfully`,
    data: resData,
  });
});

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;


  const result = await UsersService.deleteOneFromDb(id)

  const {password,...resData} = result;
  console.log(password);

  sendResponse<Partial<User>>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Users deleted successfully`,
    data: resData,
  });
});

export const UsersController = {CreateUser,getAllUsers,getOneUser,updateUserData,deleteUser};
