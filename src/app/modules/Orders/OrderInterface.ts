import { Order } from "@prisma/client";

export type IOrder = Order & {
    orderedBooks: {
      bookId: string;
      quantity: number;
    }[];
  };
  