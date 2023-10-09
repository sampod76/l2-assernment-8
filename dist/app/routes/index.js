"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AuthRoutes_1 = require("../modules/Auth/AuthRoutes");
const Users_route_1 = require("../modules/Users/Users.route");
const Category_route_1 = require("../modules/BookCategory/Category.route");
const Books_route_1 = require("../modules/Books/Books.route");
const Orders_route_1 = require("../modules/Orders/Orders.route");
const Profile_route_1 = require("../modules/UserProfile/Profile.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/auth",
        routes: AuthRoutes_1.authRouter
    },
    {
        path: "/users",
        routes: Users_route_1.usersRoutes
    },
    {
        path: "/categories",
        routes: Category_route_1.categoryRoutes
    },
    {
        path: "/books",
        routes: Books_route_1.bookRoutes
    },
    {
        path: "/orders",
        routes: Orders_route_1.orderRoutes
    },
    {
        path: "/profile",
        routes: Profile_route_1.profileRoutes
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.routes));
exports.default = router;
