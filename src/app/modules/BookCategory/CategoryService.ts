

import { Category } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createBookCategory = async (data: Category): Promise<Category> => {
  const result = await prisma.category.create({
    data,
  });

  return result;
};
const getAllCategory = async (): Promise<Category[]> => {
  const result = await prisma.category.findMany();
  return result;
};


const getOneCategory = async (id: string): Promise<Category | null> => {
  const result = await prisma.category.findUnique({
    where: {
      id,
    },
    include:{
      books:true
    }
  });

  return result;
};



const updateOneCategory = async(id:string,payload:Partial<Category>):Promise<Category>=>{


  const result =await prisma.category.update({
    where:{
      id
    },
    data:payload
  })

  return result

}

const deleteOneFromDb = async(id:string):Promise<Category>=>{
  const result =await prisma.category.delete({
    where:{
      id
    }
  })
  return result
}


export const CategoryService = { createBookCategory, getAllCategory ,getOneCategory,updateOneCategory,deleteOneFromDb};