import { Router } from 'express';
import * as controller from '../controller/user.controller.js'

const routerUser = Router();

// Criar as rotas
routerUser.get('/', controller.getAllUsers); // READ all
routerUser.get('/:id', controller.getUserById); // READ id


export default routerUser;