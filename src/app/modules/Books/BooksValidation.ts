import { z } from 'zod';
const createBookV = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is Required.',
    }),
    author: z.string({
      required_error: 'author is Required.',
    }),
    genre: z.string({
      required_error: 'genre is Required.',
    }),
    price: z.number({
      required_error: 'price is Required.',
    }),
    publicationDate: z.string({
      required_error: 'publicationDate is Required.',
    }),
    categoryId: z.string({
      required_error: 'categoryId is Required.',
    }),
  }),
});
const updateOneBook = z.object({
  body: z.object({
    title: z.string().optional(),
    author: z.string().optional(),
    genre: z.string().optional(),
    price: z.number().optional(),
    publicationDate: z.string().optional(),
    categoryId: z.string().optional(),
  }),
});

export const bookValidation = { createBookV, updateOneBook };
