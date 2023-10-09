
import { z } from 'zod';
const createUserProfile = z.object({
  body: z.object({
    year: z.number({
      required_error: 'year is must Required .',
    }),
    title: z.string({
      required_error: 'title is Required .',
    })
  }),
});

export const ProfileValidation = { createUserProfile };


