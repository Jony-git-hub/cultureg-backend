import type {DeckPayload} from "./deck.model";
import deckRepository from "./deck.repository";
import deckMapper from "./deck.mapper";

async function addDeck(payload: DeckPayload) {
    try {
        const createDto = deckMapper.objectToDto(payload);
        const dto = await deckRepository.addDeck(createDto);
        return deckMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}

async function getAllDecks() {
    try {
        const dtoArray = await deckRepository.getAllDecks();
        return dtoArray.map(dto => deckMapper.dtoToObject(dto));
    }catch(err) {
        throw err;
    }
}

async function getAllDecksByUserId(userId: number) {
    try {
        const dtoArray = await deckRepository.getAllDecksByUserId(userId);
        return dtoArray.map(dto => deckMapper.dtoToObject(dto));
    }catch(err) {
        throw err;
    }
}

async function updateDeckById(id: number, payload: DeckPayload) {
    try {
        const createDto = deckMapper.objectToDto(payload);
        const dto = await deckRepository.updateDeckById(id, createDto);
        return deckMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}

async function deleteDeckById(id: number) {
    try {
        const dto = await deckRepository.deleteDeckById(id);
        return deckMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}

export default {
    addDeck,
    getAllDecks,
    getAllDecksByUserId,
    updateDeckById,
    deleteDeckById
}