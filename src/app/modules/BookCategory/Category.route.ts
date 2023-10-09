/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { CategoryController } from './CategoryController';
import { CategoryValidation } from './CategoryValidation';
const router = Router();

router.post(
  '/create-category',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(CategoryValidation.createOneCategory),
  CategoryController.CreateCategory
);
router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN),
  CategoryController.getAllCategories
);
router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  CategoryController.getOneDataById
);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(CategoryValidation.updateCategory),
  CategoryController.updateOneCatagoryDb
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  CategoryController.deleteOneFromDb
);

export const categoryRoutes = router;
