import express from 'express';
import { authRouter } from '../modules/Auth/AuthRoutes';
import { usersRoutes } from '../modules/Users/Users.route';
import { categoryRoutes } from '../modules/BookCategory/Category.route';
import { bookRoutes } from '../modules/Books/Books.route';
import { orderRoutes } from '../modules/Orders/Orders.route';
import { profileRoutes } from '../modules/UserProfile/Profile.route';

const router = express.Router();

const moduleRoutes = [

  {
    path: "/auth",
    routes: authRouter
  },
  {
    path: "/users",
    routes: usersRoutes
  },
  {
    path: "/categories",
    routes: categoryRoutes
  },
  {
    path: "/books",
    routes: bookRoutes
  },
  {
    path: "/orders",
    routes:orderRoutes
  },
  {
    path: "/profile",
    routes:profileRoutes
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));


export default router;
