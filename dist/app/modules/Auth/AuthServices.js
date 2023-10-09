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
exports.AUthService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const config_1 = __importDefault(require("../../../config"));
const authLogin = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    const currentUser = yield prisma_1.default.user.findUnique({
        where: {
            email,
        },
    });
    if (!currentUser) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User does not matche');
    }
    const isPasswordMatched = yield bcrypt_1.default.compare(password, currentUser === null || currentUser === void 0 ? void 0 : currentUser.password);
    if (currentUser.password && !isPasswordMatched) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Password is not correct');
    }
    const token = jsonwebtoken_1.default.sign(currentUser, config_1.default.jwt.secret, { expiresIn: config_1.default.jwt.expires_in });
    return token;
});
const authUserCreate = (data) => __awaiter(void 0, void 0, void 0, function* () {
    data.password = yield bcrypt_1.default.hash(data.password, Number(10));
    const registration = yield prisma_1.default.user.create({
        data: data,
    });
    return {
        id: registration.id,
        name: registration.name,
        email: registration === null || registration === void 0 ? void 0 : registration.email,
        role: registration.role,
        contactNo: registration === null || registration === void 0 ? void 0 : registration.contactNo,
        address: registration === null || registration === void 0 ? void 0 : registration.address,
        profileImg: registration === null || registration === void 0 ? void 0 : registration.profileImg,
    };
});
exports.AUthService = { authUserCreate, authLogin };
