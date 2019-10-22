import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import FileController from './app/controllers/FileController';
import UserController from './app/controllers/UserContoller';
import ProviderController from './app/controllers/ProviderController';
import SessionContoller from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);
// rotas sem verificacao de sessao
routes.post('/users', UserController.store);
routes.post('/sessions', SessionContoller.store);

routes.use(authMiddleware);
// rotas com confirmacao de sessao
routes.put('/users', UserController.update);
routes.get('/providers', ProviderController.index);
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
