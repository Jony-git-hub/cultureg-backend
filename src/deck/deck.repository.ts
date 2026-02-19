import prisma from '../prisma'
import type {CreateDeckDto, DeckDto} from "./deck.dto";

async function addDeck(data: CreateDeckDto): Promise<DeckDto> {
    try {
        return await prisma.deck.create({
            data: data,
        });
    }catch (error){
        throw error;
    }
}

async function getAllDecks(): Promise<DeckDto[]> {
    try {
        return await prisma.deck.findMany({
            include: {
                user: true
            }
        });
    }catch (error){
        throw error;
    }
}

async function getAllDecksByUserId(userId: number): Promise<DeckDto[]> {
    try {
        return await prisma.deck.findMany({
            where: {
                userId: userId,
            },
            include: {
                user: true
            }
        });
    }catch (error){
        throw error;
    }
}

async function deleteDeckById(id: number): Promise<DeckDto> {
    try {
        return await prisma.deck.delete({
            where: {
                id: id
            }
        });
    }catch (error){
        throw error;
    }
}

export default {
    addDeck,
    getAllDecks,
    getAllDecksByUserId,
    deleteDeckById,
}