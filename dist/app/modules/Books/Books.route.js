"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRoutes = void 0;
const express_1 = require("express");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../enums/user");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const BooksValidation_1 = require("./BooksValidation");
const BooksController_1 = require("./BooksController");
const router = (0, express_1.Router)();
router.post('/create-book', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(BooksValidation_1.bookValidation.createBookV), BooksController_1.BookController.CreateBook);
router.get('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), BooksController_1.BookController.getOneBookDataById);
router.get('/:categoryId/category', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), BooksController_1.BookController.getOneByCategoryDataById);
router.get('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), BooksController_1.BookController.GetAllFiltersBooks);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(BooksValidation_1.bookValidation.updateOneBook), BooksController_1.BookController.updateBook);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), BooksController_1.BookController.deleteOneBook);
exports.bookRoutes = router;
