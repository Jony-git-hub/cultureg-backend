import prisma from '../prisma'
import type {AuthenticationUserDto, CreateUserDto, UserDto} from "./user.dto";

async function authenticateUser(email: string): Promise<AuthenticationUserDto> {
    try {
        return await prisma.user.findFirst({
            where: {
                email: email,
            },
        });
    }catch (error){
        throw error;
    }
}

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
    authenticateUser,
    addUser,
    getAllUsers,
    deleteUserById,
}