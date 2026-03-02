import type {ThemePayload} from "./theme.model";
import themeRepository from "./theme.repository";
import themeMapper from "./theme.mapper";

async function addTheme(payload: ThemePayload) {
    try {
        const createDto = themeMapper.objectToDto(payload);
        const dto = await themeRepository.addTheme(createDto);
        return themeMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}

async function getAllThemes() {
    try {
        const dtoArray = await themeRepository.getAllThemes();
        return dtoArray.map(dto => themeMapper.dtoToObject(dto));
    }catch(err) {
        throw err;
    }
}

async function updateThemeById(id: number, payload: ThemePayload) {
    try {
        const createDto = themeMapper.objectToDto(payload);
        const dto = await themeRepository.updateThemeById(id, createDto);
        return themeMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}

async function deleteThemeById(id: number) {
    try {
        const dto = await themeRepository.deleteThemeById(id);
        return themeMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}

export default {
    addTheme,
    getAllThemes,
    updateThemeById,
    deleteThemeById
}