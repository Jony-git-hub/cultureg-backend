import type {UserPayload} from "./user.model";
import userRepository from "./user.repository";
import userMapper from "./user.mapper";

async function addUser(payload: UserPayload) {
    try {
        const createDto = userMapper.objectToDto(payload);
        const dto = await userRepository.addUser(createDto);
        return userMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}

async function getAllUsers() {
    try {
        const dtoArray = await userRepository.getAllUsers();
        return dtoArray.map(dto => userMapper.dtoToObject(dto));
    }catch(err) {
        throw err;
    }
}


async function deleteUserById(id: number) {
    try {
        const dto = await userRepository.deleteUserById(id);
        return userMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}

export default {
    addUser,
    getAllUsers,
    deleteUserById
}