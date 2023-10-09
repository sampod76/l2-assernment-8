import { Router } from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { ProfileController } from './ProfileController';

const router = Router();
router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN,ENUM_USER_ROLE.CUSTOMER,ENUM_USER_ROLE.SELLER),
  ProfileController.getProfileData
);
export const profileRoutes = router;
