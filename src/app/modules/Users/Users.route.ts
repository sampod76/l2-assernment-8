/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { UsersController } from './UsersController';
import { UsersValidation } from './UsersValidation';

const router = Router();
router.get('/', auth(ENUM_USER_ROLE.ADMIN), UsersController.getAllUsers);
router.get('/:id', auth(ENUM_USER_ROLE.ADMIN), UsersController.getOneUser);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(UsersValidation.updateOneUser),
  UsersController.updateUserData
);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), UsersController.deleteUser);

export const usersRoutes = router;
