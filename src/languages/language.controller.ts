import type { Request, Response } from 'express';
import languageService from './language.service'

async function addLanguage(req: Request, res: Response) {
    try {
        const body = req.body;

        const result = await languageService.addLanguage(body);

        res.status(201).json({ status: 'success',message: 'Language added successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Failed to add Language", data: null, errors: "An unexpected error occurred." });
    }
}

async function getAllLanguages(req: Request, res: Response) {
    try {
        let result = await languageService.getAllLanguages();

        res.status(200).json({status: 'success', message: 'Languages fetched successfully', data: result, errors: null});
    } catch (error) {
        console.log(error);
        res.status(500).json({status: "error", message: "Failed to fetch Languages", data: null, errors: "An unexpected error occurred."});
    }
}

async function getLanguageById(req: Request, res: Response) {
    try {

    } catch (error) {
        res.status(500).json({ status: "error", message: "Failed to fetch Language", errors: "An unexpected error occurred." });
    }
}

async function updateLanguageById(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const body = req.body;

        if (!id) {
            return res.status(400).json({ status: "error", message: "Id is required", errors: "Missing ID" });
        }

        const result = await languageService.updateLanguageById(Number(id), body);

        if(!result) {
            return res.status(400).json({ status: "error", message: "Language not found", errors: 'Language does not exist' });
        }

        res.status(200).json({status: 'success', message: 'Language updated successfully', data: result, errors: null});
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", message: "Failed to update Language", errors: "An unexpected error occurred." });
    }
}

async function deleteLanguageById(req: Request, res: Response) {
    try {
        const id = req.params.id;

        if (!id) {
            return res.status(400).json({ status: "error", message: "Id is required", errors: "Missing ID" });
        }

        const result = await languageService.deleteLanguageById(Number(id));

        if(!result) {
            return res.status(400).json({ status: "error", message: "Language not found", errors: 'Language does not exist' });
        }

        res.status(200).json({ status: 'success',message: 'Language deleted successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Failed to delete Language", errors: "An unexpected error occurred." });
    }
}

export default {
    addLanguage,
    getAllLanguages,
    getLanguageById,
    updateLanguageById,
    deleteLanguageById
};