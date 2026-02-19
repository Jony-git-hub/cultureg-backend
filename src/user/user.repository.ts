import prisma from '../prisma'
import type {CreateUserDto, UserDto} from "./user.dto";

async function addUser(data: CreateUserDto): Promise<UserDto> {
    try {
        return await prisma.user.create({
            data: data,
        });
    }catch (error){
        throw error;
    }
}

async function getAllUsers(): Promise<UserDto[]> {
    try {
        return await prisma.user.findMany({});
    }catch (error){
        throw error;
    }
}

async function deleteUserById(id: number): Promise<UserDto> {
    try {
        return await prisma.user.delete({
            where: {
                id: id
            }
        });
    }catch (error){
        throw error;
    }
}

export default {
    addUser,
    getAllUsers,
    deleteUserById,
}