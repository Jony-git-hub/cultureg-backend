import { Router } from 'express';
import userController from "./user.controller";
import {checkJWT} from "../middleware/authenticate";

const router = Router();

router.post('/', userController.addUser);

router.post('/authenticate', userController.authenticateUser);

router.get('/',checkJWT, userController.getAllUsers);

router.get('/:id',checkJWT, userController.getUserById);

router.put('/:id',checkJWT, userController.updateUserById);

router.delete('/:id',checkJWT, userController.deleteUserById);

export default router;