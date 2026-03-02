import type {CardPayload} from "./card.model";
import cardRepository from "./card.repository";
import cardMapper from "./card.mapper";

async function addCard(payload: CardPayload) {
    try {
        const createDto = cardMapper.objectToDto(payload);
        const dto = await cardRepository.addCard(createDto);
        return cardMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}

async function getAllCards() {
    try {
        const dtoArray = await cardRepository.getAllCards();
        return dtoArray.map(dto => cardMapper.dtoToObject(dto));
    }catch(err) {
        throw err;
    }
}

async function updateCardById(id: number, payload: CardPayload) {
    try {
        const createDto = cardMapper.objectToDto(payload);
        const dto = await cardRepository.updateCardById(id, createDto);
        return cardMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}

async function deleteCardById(id: number) {
    try {
        const dto = await cardRepository.deleteCardById(id);
        return cardMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}

export default {
    addCard,
    getAllCards,
    updateCardById,
    deleteCardById
}