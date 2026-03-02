import prisma from '../prisma'
import type {CreateLanguageDto, LanguageDto} from "./language.dto";

async function addLanguage(data: CreateLanguageDto): Promise<LanguageDto> {
    try {
        return await prisma.language.create({
            data: data,
        });
    }catch (error){
        throw error;
    }
}

async function getAllLanguages(): Promise<LanguageDto[]> {
    try {
        return await prisma.language.findMany();
    }catch (error){
        throw error;
    }
}

async function updateLanguageById(id: number, data: CreateLanguageDto): Promise<LanguageDto> {
    try {
        return await prisma.language.update({
            where: {
                id: id
            },
            data: data,
        });
    }catch (error){
        throw error;
    }
}


async function deleteLanguageById(id: number): Promise<LanguageDto> {
    try {
        return await prisma.language.delete({
            where: {
                id: id
            },
        });
    }catch (error){
        throw error;
    }
}

export default {
    addLanguage,
    getAllLanguages,
    updateLanguageById,
    deleteLanguageById,
}