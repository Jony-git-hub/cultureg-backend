import type { Request, Response } from 'express';
import deckService from './deck.service'
import type {Deck} from "./deck.model";

async function addDeck(req: Request, res: Response) {
    try {
        const body = req.body;

        const result = await deckService.addDeck(body);

        res.status(201).json({ status: 'success',message: 'Deck added successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Failed to add Deck", data: null, errors: "An unexpected error occurred." });
    }
}

async function getAllDecks(req: Request, res: Response) {
    try {
        const userId = req.params.userId;
        let result: Deck[];

        if(userId){
            result = await deckService.getAllDecksByUserId(Number(userId));
        }else{
            result = await deckService.getAllDecks();
        }

        res.status(200).json({status: 'success', message: 'Decks fetched successfully', data: result, errors: null});
    } catch (error) {
        console.log(error);
        res.status(500).json({status: "error", message: "Failed to fetch Decks", data: null, errors: "An unexpected error occurred."});
    }
}

async function getDeckById(req: Request, res: Response) {
    try {

    } catch (error) {
        res.status(500).json({ status: "error", message: "Failed to fetch Deck", errors: "An unexpected error occurred." });
    }
}

async function updateDeckById(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const body = req.body;

        if (!id) {
            return res.status(400).json({ status: "error", message: "Id is required", errors: "Missing ID" });
        }

        const result = await deckService.updateDeckById(Number(id), body);

        if(!result) {
            return res.status(400).json({ status: "error", message: "Deck not found", errors: 'Deck does not exist' });
        }

        res.status(200).json({status: 'success', message: 'Deck updated successfully', data: result, errors: null});
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", message: "Failed to update Deck", errors: "An unexpected error occurred." });
    }
}

async function deleteDeckById(req: Request, res: Response) {
    try {
        const id = req.params.id;

        if (!id) {
            return res.status(400).json({ status: "error", message: "Id is required", errors: "Missing ID" });
        }

        const result = await deckService.deleteDeckById(Number(id));

        if(!result) {
            return res.status(400).json({ status: "error", message: "Deck not found", errors: 'Deck does not exist' });
        }

        res.status(200).json({ status: 'success',message: 'Deck deleted successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Failed to delete Deck", errors: "An unexpected error occurred." });
    }
}

export default {
    addDeck,
    getAllDecks,
    getDeckById,
    updateDeckById,
    deleteDeckById
};