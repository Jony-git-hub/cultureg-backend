import type { Request, Response } from 'express';
import themeService from './theme.service'

async function addTheme(req: Request, res: Response) {
    try {
        const body = req.body;

        const result = await themeService.addTheme(body);

        res.status(201).json({ status: 'success',message: 'Theme added successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Failed to add Theme", data: null, errors: "An unexpected error occurred." });
    }
}

async function getAllThemes(req: Request, res: Response) {
    try {
        const result = await themeService.getAllThemes();

        res.status(200).json({status: 'success', message: 'Themes fetched successfully', data: result, errors: null});
    } catch (error) {
        console.log(error);
        res.status(500).json({status: "error", message: "Failed to fetch Themes", data: null, errors: "An unexpected error occurred."});
    }
}

async function getThemeById(req: Request, res: Response) {
    try {
    } catch (error) {
        res.status(500).json({ status: "error", message: "Failed to fetch Theme", errors: "An unexpected error occurred." });
    }
}

async function updateThemeById(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const body = req.body;

        if (!id) {
            return res.status(400).json({ status: "error", message: "Id is required", errors: "Missing Id" });
        }

        const result = await themeService.updateThemeById(Number(id), body);

        if (!result) {
            return res.status(404).json({ status: "error", message: "Theme not found", errors: "Theme does not exist" });
        }

        res.status(200).json({ status: 'success', message: 'Theme updated successfully', data: result, errors: null });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", message: "Failed to update Theme", errors: "An unexpected error occurred." });
    }
}

async function deleteThemeById(req: Request, res: Response) {
    try {
        const id = req.params.id;

        if (!id) {
            return res.status(400).json({ status: "error", message: "Id is required", errors: "Missing Id" });
        }

        const result = await themeService.deleteThemeById(Number(id));

        if(!result) {
            return res.status(400).json({ status: "error", message: "Theme not found", errors: 'Theme does not exist' });
        }

        res.status(200).json({ status: 'success',message: 'Theme deleted successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Failed to delete Theme", errors: "An unexpected error occurred." });
    }
}

export default {
    addTheme,
    getAllThemes,
    getThemeById,
    updateThemeById,
    deleteThemeById
};