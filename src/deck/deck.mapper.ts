import type {Deck, DeckPayload} from "./deck.model";
import type {CreateDeckDto, DeckDto} from "./deck.dto";
import userMapper from "../user/user.mapper";
import cardMapper from "../card/card.mapper";
import themeMapper from "../theme/theme.mapper";
import languageMapper from "../languages/language.mapper";

function dtoToObject(dto: DeckDto): Deck {
    return {
        id: dto.id,
        name: dto.name,
        timestamp: Number(dto.timestamp),
        user: userMapper.dtoToObject(dto.user),
        cards: dto.cards.map(card => cardMapper.dtoToObject(card)),
        theme: themeMapper.dtoToObject(dto.theme),
        language: languageMapper.dtoToObject(dto.language),
    }
}

function objectToDto(deck: DeckPayload): CreateDeckDto {
    return {
        name: deck.name,
        timestamp: deck.timestamp,
        userId: deck.user.id,
        themeId: deck.theme.id,
        languageId: deck.language.id,
    }
}

export default {
    dtoToObject,
    objectToDto
}