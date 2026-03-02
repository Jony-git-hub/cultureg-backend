import { Router } from 'express';
import languageController from "./language.controller";

const router = Router();

router.post('/', languageController.addLanguage);

router.get('/', languageController.getAllLanguages);

router.get('/:id', languageController.getLanguageById);

router.put('/:id', languageController.updateLanguageById);

router.delete('/:id', languageController.deleteLanguageById);

export default router;