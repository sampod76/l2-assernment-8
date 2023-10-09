import { z } from 'zod';
const createOneCategory = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is Required!',
    }),
  }),
});
const updateCategory = z.object({
  body: z.object({
    title: z.string().optional(),
  }),
});

export const CategoryValidation = { createOneCategory, updateCategory };
