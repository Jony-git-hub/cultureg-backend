import type {LanguagePayload} from "./language.model";
import languageRepository from "./language.repository";
import languageMapper from "./language.mapper";

async function addLanguage(payload: LanguagePayload) {
    try {
        const createDto = languageMapper.objectToDto(payload);
        const dto = await languageRepository.addLanguage(createDto);
        return languageMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}

async function getAllLanguages() {
    try {
        const dtoArray = await languageRepository.getAllLanguages();
        return dtoArray.map(dto => languageMapper.dtoToObject(dto));
    }catch(err) {
        throw err;
    }
}

async function updateLanguageById(id: number, payload: LanguagePayload) {
    try {
        const createDto = languageMapper.objectToDto(payload);
        const dto = await languageRepository.updateLanguageById(id, createDto);
        return languageMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}

async function deleteLanguageById(id: number) {
    try {
        const dto = await languageRepository.deleteLanguageById(id);
        return languageMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}

export default {
    addLanguage,
    getAllLanguages,
    updateLanguageById,
    deleteLanguageById
}