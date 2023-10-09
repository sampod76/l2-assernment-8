"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderValidation = void 0;
const zod_1 = require("zod");
const makeOneOrder = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string({
            required_error: 'userId is Required .',
        }),
        orderedBooks: zod_1.z.array(zod_1.z.object({
            bookId: zod_1.z.string({
                required_error: 'bookId is Required .',
            }),
            quantity: zod_1.z.number({
                required_error: 'quantity is Required .',
            }),
        }))
    }),
});
exports.OrderValidation = { makeOneOrder };
