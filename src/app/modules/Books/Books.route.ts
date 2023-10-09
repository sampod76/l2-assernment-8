import { Router } from 'express';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import { BookValidation } from './BooksValidation';
import { BookController } from './BooksController';

const router = Router();

router.post('/create-book',auth(ENUM_USER_ROLE.ADMIN,ENUM_USER_ROLE.SELLER),validateRequest(BookValidation.createBookV), BookController.CreateBook);

router.get('/:id', BookController.getOneBookDataById);

router.get('/:categoryId/category', BookController.getOneByCategoryDataById);

router.get('/', BookController.GetAllFiltersBooks);

router.patch('/:id',auth(ENUM_USER_ROLE.ADMIN),validateRequest(BookValidation.updateOneBook),BookController.updateBook
);
router.delete('/:id',auth(ENUM_USER_ROLE.ADMIN), BookController.deleteOneBook);


export const bookRoutes = router;
