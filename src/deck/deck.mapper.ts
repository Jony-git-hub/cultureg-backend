import type {Deck, DeckPayload} from "./deck.model";
import type {CreateDeckDto, DeckDto} from "./deck.dto";
import userMapper from "../user/user.mapper";

function dtoToObject(dto: DeckDto): Deck {
    const user = userMapper.dtoToObject(dto.user)

    return {
        id: dto.id,
        name: dto.name,
        timestamp: Number(dto.timestamp),
        user: user,
        cards: [],
    }
}

function objectToDto(deck: DeckPayload): CreateDeckDto {
    return {
        name: deck.name,
        timestamp: deck.timestamp,
        userId: deck.user.id,
    }
}

export default {
    dtoToObject,
    objectToDto
}