import { Router } from 'express';
import userController from "./user.controller";

const router = Router();

router.post('/', userController.addUser);

router.get('/', userController.getAllUsers);

router.get('/:id', userController.getUserById);

router.put('/:id', userController.updateUserById);

router.delete('/:id', userController.deleteUserById);

export default router;