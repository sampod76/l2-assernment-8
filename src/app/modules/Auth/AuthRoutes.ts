import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidation } from './Auth.validation';
import { AuthController } from './AuthController';

const router = Router();

router.post(
  '/signup',
  validateRequest(AuthValidation.SignUpUser),
  AuthController.AuthToSignUp
);

router.post(
  '/signin',
  validateRequest(AuthValidation.SignInUser),
  AuthController.AuthToSignIn
);

export const authRouter = router;
