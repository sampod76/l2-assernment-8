import { User } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import config from '../../../config';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AUthService } from './AuthServices';

const AuthToSignUp = catchAsync(async (req: Request, res: Response) => {
  const userData = req.body;
  const SignUpResult = await AUthService.authUserCreate(userData);

  if (SignUpResult) {
    // eslint-disable-next-line no-unused-vars
    const { password, ...data } = SignUpResult;
    sendResponse<Partial<User>>(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: 'User created successfully',
      data: data,
    });
  }
});

const AuthToSignIn = catchAsync(async (req: Request, res: Response) => {
  const { ...userData } = req.body;

  const token = await AUthService.authLogin(userData);

  const cookieOption = {
    secure: config.env === 'production',
    httpOnly: true,
  };

  res.cookie('JWTToken', token, cookieOption);

  res.json({
    success: true,
    statusCode: httpStatus.OK,
    message: 'User sign In successfully!',
    token,
  });
});

export const AuthController = { AuthToSignUp, AuthToSignIn };
