
import { z } from 'zod';
const makeOneOrder = z.object({
  body: z.object({
    userId: z.string({
      required_error: 'userId is Required .',
    }),
    orderedBooks: z.array(
      z.object({
        bookId: z.string({
          required_error: 'bookId is Required .',
        }),
        quantity: z.number({
          required_error: 'quantity is Required .',
        }),
      })
    )
  }),
});

export const OrderValidation = { makeOneOrder };


