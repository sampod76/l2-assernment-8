import  jwt, { Secret }  from 'jsonwebtoken';
import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';

import bcrypt from 'bcrypt';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import config from '../../../config';

const authLogin = async (payload: {
  userId?: string;
  email?: string;
  password: string;
}): Promise<any> => {
  const { email, password } = payload;

  const currentUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!currentUser) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not matche');
  }
  const isPasswordMatched = await bcrypt.compare(password, currentUser?.password);

  if (currentUser.password && !isPasswordMatched) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Password is not correct');
  }

  const token =  jwt.sign(currentUser, config.jwt.secret as Secret, { expiresIn: config.jwt.expires_in });
  return token

};

const authUserCreate = async (data: User): Promise<Partial<User>> => {
  data.password = await bcrypt.hash(data.password, Number(10));
  const registration = await prisma.user.create({
    data:data,
  });

  return {
    id: registration.id,
    name: registration.name,
    email: registration?.email,
    role: registration.role,
    contactNo: registration?.contactNo,
    address: registration?.address,
    profileImg: registration?.profileImg,
  };
};

export const AUthService = { authUserCreate, authLogin };
