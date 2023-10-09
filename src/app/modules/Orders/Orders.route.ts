/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';

import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { OrderController } from './OrdersController';
import { OrderValidation } from './OrderValidation';
const router = Router();

router.post(
  '/create-order',
  auth(ENUM_USER_ROLE.ADMIN,ENUM_USER_ROLE.CUSTOMER),
  validateRequest(OrderValidation.makeOneOrder),
  OrderController.makeOneOrder
);
router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  OrderController.getAllOrders
);
// for One order getting
router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  OrderController.getOneOrderById
);
router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), OrderController.updateOrder);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), OrderController.deleteOneFromDb);

export const orderRoutes = router;
