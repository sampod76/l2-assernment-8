"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRoutes = void 0;
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
const express_1 = require("express");
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const CategoryController_1 = require("./CategoryController");
const CategoryValidation_1 = require("./CategoryValidation");
const router = (0, express_1.Router)();
router.post('/create-category', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(CategoryValidation_1.CategoryValidation.createOneCategory), CategoryController_1.CategoryController.CreateCategory);
router.get('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), CategoryController_1.CategoryController.getAllCategories);
router.get('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), CategoryController_1.CategoryController.getOneDataById);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(CategoryValidation_1.CategoryValidation.updateCategory), CategoryController_1.CategoryController.updateOneCatagoryDb);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), CategoryController_1.CategoryController.deleteOneFromDb);
exports.categoryRoutes = router;
