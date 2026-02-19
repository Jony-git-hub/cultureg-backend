import { Router } from 'express';
import deckController from "./deck.controller";

const router = Router();

router.post('/', deckController.addDeck);

router.get('/', deckController.getAllDecks);

router.get('/:id', deckController.getDeckById);

router.put('/:id', deckController.updateDeckById);

router.delete('/:id', deckController.deleteDeckById);

export default router;