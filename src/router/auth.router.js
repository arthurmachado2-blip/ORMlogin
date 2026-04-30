import { Router } from 'express';
import * as controller from '../controller/auth.controller.js'

const routerAuth = Router();

// Criar as rotas publicas
routerAuth.post('/criar', controller.createUser); // CREATE
routerAuth.post('/login', controller.loginUser); //login User
export default routerAuth;