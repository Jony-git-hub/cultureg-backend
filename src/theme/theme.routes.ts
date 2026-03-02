import { Router } from 'express';
import themeController from "./theme.controller";

const router = Router();

router.post('/', themeController.addTheme);

router.get('/', themeController.getAllThemes);

router.get('/:id', themeController.getThemeById);

router.put('/:id', themeController.updateThemeById);

router.delete('/:id', themeController.deleteThemeById);

export default router;