import type {Card, CardPayload} from "./card.model";
import type {CreateCardDto, CardDto} from "./card.dto";
import userMapper from "../user/user.mapper";

function dtoToObject(dto: CardDto): Card {
    return {
        id: dto.id,
        name: dto.name,
        question: dto.question,
        correctAnswer: dto.correctAnswer,
        wrongAnswer1: dto.wrongAnswer1,
        wrongAnswer2: dto.wrongAnswer2,
        wrongAnswer3: dto.wrongAnswer3,
    }
}

function objectToDto(card: CardPayload): CreateCardDto {
    return {
        name: card.name,
        question: card.question,
        correctAnswer: card.correctAnswer,
        wrongAnswer1: card.wrongAnswer1,
        wrongAnswer2: card.wrongAnswer2,
        wrongAnswer3: card.wrongAnswer3,
        deckId: card.deck.id
    }
}

export default {
    dtoToObject,
    objectToDto
}