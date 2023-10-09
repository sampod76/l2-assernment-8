"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const Auth_validation_1 = require("./Auth.validation");
const AuthController_1 = require("./AuthController");
const router = (0, express_1.Router)();
router.post('/signup', (0, validateRequest_1.default)(Auth_validation_1.AuthValidation.SignUpUser), AuthController_1.AuthController.AuthToSignUp);
router.post('/signin', (0, validateRequest_1.default)(Auth_validation_1.AuthValidation.SignInUser), AuthController_1.AuthController.AuthToSignIn);
exports.authRouter = router;
