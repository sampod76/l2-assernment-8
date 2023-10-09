import { Router } from 'express';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import { BookController } from './BooksController';
import { BookValidation } from './BooksValidation';
const router = Router();

router.post('/create-book',auth(ENUM_USER_ROLE.ADMIN),validateRequest(BookValidation.createBookV), BookController.CreateBook);

router.get('/:id',auth(ENUM_USER_ROLE.ADMIN), BookController.getOneBookDataById);

router.get('/:categoryId/category',auth(ENUM_USER_ROLE.ADMIN), BookController.getOneByCategoryDataById);

router.get('/',auth(ENUM_USER_ROLE.ADMIN), BookController.GetAllFiltersBooks);

router.patch('/:id',auth(ENUM_USER_ROLE.ADMIN),validateRequest(BookValidation.updateOneBook),BookController.updateBook
);
router.delete('/:id',auth(ENUM_USER_ROLE.ADMIN), BookController.deleteOneBook);


export const bookRoutes = router;
