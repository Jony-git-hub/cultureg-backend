import type {UserPayload} from "./user.model";
import userRepository from "./user.repository";
import userMapper from "./user.mapper";
import bcrypt from 'bcrypt';


async function authenticateUser(email: string, password: string) {
    const dto = await userRepository.authenticateUser(email);

    if (!dto) {
        throw new Error('INVALID_CREDENTIALS');
    }

    const isPasswordValid = await bcrypt.compare(password, dto.password);                                         

    if (!isPasswordValid) {
        throw new Error('INVALID_CREDENTIALS');
    }

    return userMapper.dtoToObject(dto);
}

async function addUser(payload: UserPayload) {
    try {
        const createDto = userMapper.objectToDto(payload);
        createDto.password = await bcrypt.hash(createDto.password, 10);
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
    authenticateUser,
    addUser,
    getAllUsers,
    deleteUserById
}