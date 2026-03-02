import prisma from '../prisma'
import type {CreateLikeDto, LikeDto} from "./like.dto";

async function addLike(data: CreateLikeDto): Promise<LikeDto> {
    try {
        return await prisma.deck.create({
            data: data,
        });
    }catch (error){
        throw error;
    }
}

async function getAllLikes(): Promise<LikeDto[]> {
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

async function getAllLikesByUserId(userId: number): Promise<LikeDto[]> {
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

async function deleteLikeByIds(userId: number, deckId: number): Promise<LikeDto> {
    try {
        return await prisma.deck.delete({
            where: {
                userId: userId,
                deckId: deckId,
            }
        });
    }catch (error){
        throw error;
    }
}



export default {
    addLike,
    getAllLikes,
    getAllLikesByUserId,
    deleteLikeByIds,
}