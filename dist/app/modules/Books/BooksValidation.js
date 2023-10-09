"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookValidation = void 0;
const zod_1 = require("zod");
const createBookV = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: 'title is Required.',
        }),
        author: zod_1.z.string({
            required_error: 'author is Required.',
        }),
        genre: zod_1.z.string({
            required_error: 'genre is Required.',
        }),
        price: zod_1.z.number({
            required_error: 'price is Required.',
        }),
        publicationDate: zod_1.z.string({
            required_error: 'publicationDate is Required.',
        }),
        categoryId: zod_1.z.string({
            required_error: 'categoryId is Required.',
        }),
    }),
});
const updateOneBook = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        author: zod_1.z.string().optional(),
        genre: zod_1.z.string().optional(),
        price: zod_1.z.number().optional(),
        publicationDate: zod_1.z.string().optional(),
        categoryId: zod_1.z.string().optional(),
    }),
});
exports.bookValidation = { createBookV, updateOneBook };
