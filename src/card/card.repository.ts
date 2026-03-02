import prisma from '../prisma'
import type {CreateCardDto, CardDto} from "./card.dto";

async function addCard(data: CreateCardDto): Promise<CardDto> {
    try {
        return await prisma.card.create({
            data: data,
        });
    }catch (error){
        throw error;
    }
}

async function getAllCards(): Promise<CardDto[]> {
    try {
        return await prisma.card.findMany({});
    }catch (error){
        throw error;
    }
}

async function updateCardById(id: number, data: CreateCardDto): Promise<CardDto> {
    try {
        return await prisma.card.update({
            where: {
                id: id
            },
            data: data,
        });
    }catch (error){
        throw error;
    }
}


async function deleteCardById(id: number): Promise<CardDto> {
    try {
        return await prisma.card.delete({
            where: {
                id: id
            },
        });
    }catch (error){
        throw error;
    }
}

export default {
    addCard,
    getAllCards,
    updateCardById,
    deleteCardById,
}