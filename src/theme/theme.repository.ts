import prisma from '../prisma'
import type {CreateThemeDto, ThemeDto} from "./theme.dto";

async function addTheme(data: CreateThemeDto): Promise<ThemeDto> {
    try {
        return await prisma.theme.create({
            data: data,
        });
    }catch (error){
        throw error;
    }
}

async function getAllThemes(): Promise<ThemeDto[]> {
    try {
        return await prisma.theme.findMany({});
    }catch (error){
        throw error;
    }
}

async function updateThemeById(id: number, data: CreateThemeDto): Promise<ThemeDto> {
    try {
        return await prisma.theme.update({
            where: {
                id: id
            },
            data: data,
        });
    }catch (error){
        throw error;
    }
}

async function deleteThemeById(id: number): Promise<ThemeDto> {
    try {
        return await prisma.theme.delete({
            where: {
                id: id
            }
        });
    }catch (error){
        throw error;
    }
}

export default {
    addTheme,
    getAllThemes,
    updateThemeById,
    deleteThemeById,
}