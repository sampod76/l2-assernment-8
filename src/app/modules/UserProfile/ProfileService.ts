
import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getProfile = async (user:{role:string,id:string}): Promise<User | null> => {

  const profileResult = await prisma.user.findUnique({
    where: {
      id:user?.id,
    },
  });

  return profileResult;
};

export const ProfileService = {getProfile};
