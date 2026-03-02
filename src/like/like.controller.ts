import type { Request, Response } from 'express';
import likeService from './like.service'

async function addLike(req: Request, res: Response) {
    /*try {
        const user = req.body;

        const result = await likeService.addLike(user);

        res.status(201).json({ status: 'success',message: 'Deck added successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Deck failed to add", data: null, errors: "An unexpected error occurred." });
    }*/
}

async function getAllLikes(req: Request, res: Response) {
    try {
        const userId = req.params.userId;
        let result = [];

        if(userId){
            result = await likeService.getAllLikesByUserId(Number(userId));
        }else{
            result = await likeService.getAllLikes();
        }

        res.status(200).json({status: 'success', message: 'Decks fetched successfully', data: result, errors: null});
    } catch (error) {
        console.log(error);
        res.status(500).json({status: "error", message: "Decks failed to fetch", data: null, errors: "An unexpected error occurred."});
    }
}

async function deleteLikeByIds(req: Request, res: Response) {
    try {
        const userId = req.params.userId;
        const deckId = req.params.deckId;

        if (!userId) {
            return res.status(400).json({ status: "error", message: "User ID is required", errors: "Missing ID" });
        }

        if (!deckId) {
            return res.status(400).json({ status: "error", message: "Deck ID is required", errors: "Missing ID" });
        }

        const result = await likeService.deleteLikeByIds(Number(userId), Number(deckId));

        /*if(!result) {
            return res.status(400).json({ status: "error", message: "Dashboard failed to delete", errors: 'The dashboard does not exist' });
        }*/

        res.status(200).json({ status: 'success',message: 'Dashboard deleted successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Dashboard failed to delete", errors: "An unexpected error occurred." });
    }
}

export default {
    addLike,
    getAllLikes,
    deleteLikeByIds
};