import { Book } from '@prisma/client';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { IBookFilters } from './BooksInterface';

const BookCreate = async (data: Book): Promise<Book> => {


  function customDateConverter(inputDate: string | Date): Date | string | null {
    const NewDateObject = new Date(inputDate);
    if (isNaN(NewDateObject.getTime())) {
      return null;
    }
    const isoDate = NewDateObject.toISOString();
    return isoDate;
  }

  const DateOfISO = customDateConverter(data?.publicationDate);

  data.publicationDate = DateOfISO as Date;

  

  const BookResult = await prisma.book.create({
    data,
    include: {
      category: true,
    },
  });

  return BookResult;
};






const filtersAllBooksData = async (
  filtersData: Partial<IBookFilters>,
  options: IPaginationOptions
): Promise<IGenericResponse<Book[]>> => {




//for pagination ///
  const page = Number(options.page || 1);
  const limit = Number(options.size || 10);
  const skip = (page - 1) * limit;

  const sortBy = options.sortBy || 'createdAt';
  const sortOrder = options.sortOrder || 'asc';

  const where: { OR?: any ;AND?:any} = {};

  // ! for filter data from Book Table

  if (
    filtersData?.title ||
    filtersData?.author ||
    filtersData?.genre ||
    filtersData?.category || 
    filtersData?.search
  ) {
    where.OR = [];
    if (filtersData?.title ) {
      where.OR.push({
        title: {
          contains: filtersData.title ,
          mode: 'insensitive',
        },
      });
    }
    if (filtersData?.author) {
      where.OR.push({
        author: {
          contains: filtersData.author ,
          mode: 'insensitive',
        },
      });
    }

    if (filtersData?.genre) {
      where.OR.push({
        genre: {
          contains: filtersData.genre,
          mode: 'insensitive',
        },
      });
    }
    if (filtersData?.category) {
      where.OR.push({
        AND: [
          {
            categoryId: {
              equals: filtersData.category,
              mode: 'insensitive',
            },
          },
        ],
      });
    }
    if(filtersData?.search){
     where.OR.push(
      {
      title: {
        contains: filtersData.search,
        mode: 'insensitive',
      },
     }
     ,
      {
      author: {
        contains: filtersData.search,
        mode: 'insensitive',
      },
     },
      {
      genre: {
        contains: filtersData.search,
        mode: 'insensitive',
      },
     }
     )
    }
  }

  // ! for filtering with minPrice and maxPrice ////


  if (filtersData.minPrice || filtersData.maxPrice) {
    if (filtersData.minPrice && filtersData.maxPrice) {
  
      where.AND = [
        {
          price: {
            gte: parseFloat(filtersData.minPrice),
            lte: parseFloat(filtersData.maxPrice),
          },
        },
      ];
    } else if (filtersData.minPrice) {
   
      where.AND = [
        {
          price: {
            gte: parseFloat(filtersData.minPrice),
          },
        },
      ];
    } else if (filtersData.maxPrice) {

      where.AND = [
        {
          price: {
            lte: parseFloat(filtersData.maxPrice),
          },
        },
      ];
    }
  }

  const BooksResults = await prisma.book.findMany({
    where,
    include: {
      category: true,
    },

    // for pagination
    take: limit,
    skip: skip,
    orderBy: {
      [sortBy]: sortOrder,
    },
  });

  const total = await prisma.book.count();
  
  return {
    meta: {
      total,
      page,
      size: limit,
    },
    data: BooksResults,
  };
};

const getOneData = async (id: string): Promise<Book | null> => {

  const OneBookResult = await prisma.book.findUnique({
    where: {
      id,
    },
    include: {
      category: true,
    },
  });

  return OneBookResult;
};


// ! this function for get One categoryId or id in Book table

const getOneBookByCategoryData = async (
  id: string,
  options: IPaginationOptions
): Promise<any>=> {
  const resultById = await prisma.book.findUnique({
    where: {
      id,
    },
    include: {
      category: true,
    },
  });

  if (resultById) {
    return resultById;
  }

  const page = Number(options.page || 1);
  const limit = Number(options.size || 10);
  const skip = (page - 1) * limit;

  const sortBy = options.sortBy || 'createdAt';
  const sortOrder = options.sortOrder || 'desc';
  // console.log(id,"id from sing");
  const result = await prisma.book.findMany({
    where: {
      categoryId: id,
    },
    include: {
      category: true,
    },
    take: limit,
    skip: skip,
    orderBy: {
      [sortBy]: sortOrder,
    },
  });

  const total = await prisma.book.count();
  return {
    meta: {
      total,
      page,
      size: limit,
    },
    data: result,
  };
};

const updateBookData = async (
  id: string,
  payload: Partial<Book>
): Promise<Book> => {
  console.log("🚀 ~ file: BookService.ts:261 ~ id:", id)
  console.log("🚀 ~ file: BookService.ts:261 ~ payload:", payload)

  const result = await prisma.book.update({
    where: {
      id,
    },
    data: payload,
    include: {
      category: true,
    },
  });

  return result;
};

const deleteBook = async (id: string): Promise<Book> => {
  const deletedResult = await prisma.book.delete({
    where: {
      id,
    },
  });

  return deletedResult;
};

export const BookService = {
  BookCreate,
  filtersAllBooksData,
  getOneData,
  updateBookData,
  deleteBook,
  getOneBookByCategoryData,
};
