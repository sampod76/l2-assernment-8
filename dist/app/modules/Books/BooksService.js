"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const BookCreate = (data) => __awaiter(void 0, void 0, void 0, function* () {
    function customDateConverter(inputDate) {
        const NewDateObject = new Date(inputDate);
        if (isNaN(NewDateObject.getTime())) {
            return null;
        }
        const isoDate = NewDateObject.toISOString();
        return isoDate;
    }
    const DateOfISO = customDateConverter(data === null || data === void 0 ? void 0 : data.publicationDate);
    data.publicationDate = DateOfISO;
    const BookResult = yield prisma_1.default.book.create({
        data,
        include: {
            category: true,
        },
    });
    return BookResult;
});
const filtersAllBooksData = (filtersData, options) => __awaiter(void 0, void 0, void 0, function* () {
    //for pagination ///
    const page = Number(options.page || 1);
    const limit = Number(options.size || 10);
    const skip = (page - 1) * limit;
    const sortBy = options.sortBy || 'createdAt';
    const sortOrder = options.sortOrder || 'asc';
    const where = {};
    // ! for filter data from Book Table
    if ((filtersData === null || filtersData === void 0 ? void 0 : filtersData.title) ||
        (filtersData === null || filtersData === void 0 ? void 0 : filtersData.author) ||
        (filtersData === null || filtersData === void 0 ? void 0 : filtersData.genre) ||
        (filtersData === null || filtersData === void 0 ? void 0 : filtersData.category) ||
        (filtersData === null || filtersData === void 0 ? void 0 : filtersData.search)) {
        where.OR = [];
        if (filtersData === null || filtersData === void 0 ? void 0 : filtersData.title) {
            where.OR.push({
                title: {
                    contains: filtersData.title,
                    mode: 'insensitive',
                },
            });
        }
        if (filtersData === null || filtersData === void 0 ? void 0 : filtersData.author) {
            where.OR.push({
                author: {
                    contains: filtersData.author,
                    mode: 'insensitive',
                },
            });
        }
        if (filtersData === null || filtersData === void 0 ? void 0 : filtersData.genre) {
            where.OR.push({
                genre: {
                    contains: filtersData.genre,
                    mode: 'insensitive',
                },
            });
        }
        if (filtersData === null || filtersData === void 0 ? void 0 : filtersData.category) {
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
        if (filtersData === null || filtersData === void 0 ? void 0 : filtersData.search) {
            where.OR.push({
                title: {
                    contains: filtersData.search,
                    mode: 'insensitive',
                },
            }, {
                author: {
                    contains: filtersData.search,
                    mode: 'insensitive',
                },
            }, {
                genre: {
                    contains: filtersData.search,
                    mode: 'insensitive',
                },
            });
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
        }
        else if (filtersData.minPrice) {
            where.AND = [
                {
                    price: {
                        gte: parseFloat(filtersData.minPrice),
                    },
                },
            ];
        }
        else if (filtersData.maxPrice) {
            where.AND = [
                {
                    price: {
                        lte: parseFloat(filtersData.maxPrice),
                    },
                },
            ];
        }
    }
    const BooksResults = yield prisma_1.default.book.findMany({
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
    const total = yield prisma_1.default.book.count();
    return {
        meta: {
            total,
            page,
            size: limit,
        },
        data: BooksResults,
    };
});
const getOneData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const OneBookResult = yield prisma_1.default.book.findUnique({
        where: {
            id,
        },
        include: {
            category: true,
        },
    });
    return OneBookResult;
});
// ! this function for get One categoryId or id in Book table
const getOneBookByCategoryData = (id, options) => __awaiter(void 0, void 0, void 0, function* () {
    const resultById = yield prisma_1.default.book.findUnique({
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
    const result = yield prisma_1.default.book.findMany({
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
    const total = yield prisma_1.default.book.count();
    return {
        meta: {
            total,
            page,
            size: limit,
        },
        data: result,
    };
});
const updateBookData = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("🚀 ~ file: BookService.ts:261 ~ id:", id);
    console.log("🚀 ~ file: BookService.ts:261 ~ payload:", payload);
    const result = yield prisma_1.default.book.update({
        where: {
            id,
        },
        data: payload,
        include: {
            category: true,
        },
    });
    return result;
});
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedResult = yield prisma_1.default.book.delete({
        where: {
            id,
        },
    });
    return deletedResult;
});
exports.BookService = {
    BookCreate,
    filtersAllBooksData,
    getOneData,
    updateBookData,
    deleteBook,
    getOneBookByCategoryData,
};
