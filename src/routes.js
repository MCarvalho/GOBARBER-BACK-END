import { Router } from 'express';

import UserController from './app/controllers/UserContoller';
import SessionContoller from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();
// rotas sem verificacao de sessao
routes.post('/users', UserController.store);
routes.post('/sessions', SessionContoller.store);

routes.use(authMiddleware);
// rotas com confirmacao de sessao
routes.put('/users', UserController.update);

export default routes;
