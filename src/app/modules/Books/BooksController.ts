import { Book } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { IGenericResponse } from '../../../interfaces/common';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { BookService } from './BooksService';

const CreateBook = catchAsync(async (req: Request, res: Response) => {
  const bookData = req.body;
  const result = await BookService.BookCreate(bookData);

  sendResponse<Book>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Successfully Create Book',
    data: result,
  });
});

const GetAllFiltersBooks = catchAsync(async (req: Request, res: Response) => {
  const booksFilterableFields = [
    'search',
    'minPrice',
    'maxPrice',
    'category',
    'roomId',
    'facultyId',
    'title',
    'price',
    'genre',
    'publicationDate',
  ];

  const filters = pick(req.query, booksFilterableFields);

  const options = pick(req.query, ['size', 'page', 'sortBy', 'sortOrder']);

  const allBooksResult = await BookService.filtersAllBooksData(
    filters,
    options
  );

  sendResponse<IGenericResponse<Book[]>>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Successfully Fetch Book Data',
    data: allBooksResult,
  });
});

const getOneBookDataById = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    const OneBookResult = await BookService.getOneData(id);

    sendResponse<Book>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: `Book fetched successfully`,
      data: OneBookResult,
    });
  }
);

const getOneByCategoryDataById = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.categoryId;

    const options = pick(req.query, ['size', 'page', 'sortBy', 'sortOrder']);

    const result = await BookService.getOneBookByCategoryData(id, options);

    sendResponse<IGenericResponse<Book[] | Book>>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: `Books with associated category data fetched successfully`,
      data: result?.data,
      meta: result?.meta,
    });
  }
);

const updateBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req?.body;

  const result = await BookService.updateBookData(id, data);

  sendResponse<Book>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Successfully updated the book`,
    data: result,
  });
});

const deleteOneBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await BookService.deleteBook(id);

  sendResponse<Book>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Successfully deleted the book`,
    data: result,
  });
});

export const BookController = {
  CreateBook,
  GetAllFiltersBooks,
  getOneBookDataById,
  updateBook,
  deleteOneBook,
  getOneByCategoryDataById,
};
