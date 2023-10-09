import { z } from 'zod';

const SignUpUser = z.object({
  body: z.object({
    name: z.string({
      required_error: 'name is required.',
    }),
    email: z.string({
      required_error: 'email is required.',
    }),
    password: z.string({
      required_error: 'password is required.',
    }),
    role: z.string({
      required_error: 'role is required.',
    }),
    contactNo: z.string({
      required_error: 'contactNo is required.',
    }),
    address: z.string({
      required_error: 'address is required.',
    }),
    profileImg: z.string().optional(),
  }),
});
const SignInUser = z.object({
  body: z.object({
    email: z.string({
      required_error: 'email is required.',
    }),
    password: z.string({
      required_error: 'password is required.',
    }),
  }),
});

export const AuthValidation = { SignUpUser, SignInUser };
