import type {User, UserPayload} from "./user.model";
import type {CreateUserDto, UserDto} from "./user.dto";

function dtoToObject(dto: UserDto): User {
    return {
        id: dto.id,
        email: dto.email,
        firstName: dto.firstName,
        lastName: dto.lastName,
        pseudo: dto.pseudo,
        elo: dto.elo,
        role: dto.role,
    }
}

function objectToDto(user: UserPayload): CreateUserDto {
    return {
        email: user.email,
        password: user.password,
        firstName: user.firstName,
        lastName: user.lastName,
        pseudo: user.pseudo,
        elo: user.elo,
        role: user.role,
    }
}

export default {
    dtoToObject,
    objectToDto
}