import { Router } from 'express';
import likeController from "./like.controller";

const router = Router();

router.post('/', likeController.addLike);

router.get('/', likeController.getAllLikes);

router.delete('/:userId/:deckId', likeController.deleteLikeByIds);

export default router;