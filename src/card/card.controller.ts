import type { Request, Response } from 'express';
import cardService from './card.service'

async function addCard(req: Request, res: Response) {
    try {
        const body = req.body;

        const result = await cardService.addCard(body);

        res.status(201).json({ status: 'success',message: 'Card added successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Failed to add Card", data: null, errors: "An unexpected error occurred." });
    }
}

async function getAllCards(req: Request, res: Response) {
    try {
        let result = await cardService.getAllCards();


        res.status(200).json({status: 'success', message: 'Cards fetched successfully', data: result, errors: null});
    } catch (error) {
        console.log(error);
        res.status(500).json({status: "error", message: "Failed to fetch Cards", data: null, errors: "An unexpected error occurred."});
    }
}

async function getCardById(req: Request, res: Response) {
    try {

    } catch (error) {
        res.status(500).json({ status: "error", message: "Failed to fetch Card", errors: "An unexpected error occurred." });
    }
}

async function updateCardById(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const body = req.body;

        if (!id) {
            return res.status(400).json({ status: "error", message: "Id is required", errors: "Missing ID" });
        }

        const result = await cardService.updateCardById(Number(id), body);

        if(!result) {
            return res.status(400).json({ status: "error", message: "Card not found", errors: 'Card does not exist' });
        }

        res.status(200).json({status: 'success', message: 'Card updated successfully', data: result, errors: null});
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", message: "Failed to update Card", errors: "An unexpected error occurred." });
    }
}

async function deleteCardById(req: Request, res: Response) {
    try {
        const id = req.params.id;

        if (!id) {
            return res.status(400).json({ status: "error", message: "Id is required", errors: "Missing ID" });
        }

        const result = await cardService.deleteCardById(Number(id));

        if(!result) {
            return res.status(400).json({ status: "error", message: "Card not found", errors: 'Card does not exist' });
        }

        res.status(200).json({ status: 'success',message: 'Card deleted successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Failed to delete Card", errors: "An unexpected error occurred." });
    }
}

export default {
    addCard,
    getAllCards,
    getCardById,
    updateCardById,
    deleteCardById
};