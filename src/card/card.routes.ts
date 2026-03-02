import { Router } from 'express';
import cardController from "./card.controller";

const router = Router();

router.post('/', cardController.addCard);

router.get('/', cardController.getAllCards);

router.get('/:id', cardController.getCardById);

router.put('/:id', cardController.updateCardById);

router.delete('/:id', cardController.deleteCardById);

export default router;