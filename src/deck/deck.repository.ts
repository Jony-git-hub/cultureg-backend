import prisma from '../prisma'
import type {CreateDeckDto, DeckDto} from "./deck.dto";

async function addDeck(data: CreateDeckDto): Promise<DeckDto> {
    try {
        return await prisma.deck.create({
            data: data,
            include: {
                user: true,
                cards: true,
                theme: true,
                language: true,
            }
        });
    }catch (error){
        throw error;
    }
}

async function getAllDecks(): Promise<DeckDto[]> {
    try {
        return await prisma.deck.findMany({
            include: {
                user: true,
                cards: true,
                theme: true,
                language: true,
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
                user: true,
                cards: true,
                theme: true,
                language: true,
            }
        });
    }catch (error){
        throw error;
    }
}

async function updateDeckById(id: number, data: CreateDeckDto): Promise<DeckDto> {
    try {
        return await prisma.deck.update({
            where: {
                id: id
            },
            data: data,
            include: {
                user: true,
                cards: true,
                theme: true,
                language: true,
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
            },
            include: {
                user: true,
                cards: true,
                theme: true,
                language: true,
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
    updateDeckById,
    deleteDeckById,
}