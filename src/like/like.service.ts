import type {LikePayload} from "./like.model";
import likeRepository from "./like.repository";
import likeMapper from "./like.mapper";

async function addLike(payload: LikePayload) {
    /*try {
        const createDto = likeMapper.objectToDto(payload);
        const dto = await likeRepository.addLike(createDto);
        return likeMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }*/
}

async function getAllLikes() {
    try {
        const dtoArray = await likeRepository.getAllLikes();
        return dtoArray.map(dto => likeMapper.dtoToObject(dto));
    }catch(err) {
        throw err;
    }
}

async function getAllLikesByUserId(userId: number) {
    try {
        const dtoArray = await likeRepository.getAllLikesByUserId(userId);
        return dtoArray.map(dto => likeMapper.dtoToObject(dto));
    }catch(err) {
        throw err;
    }
}


async function deleteLikeByIds(userId: number, deckId: number) {
    try {
        const dto = await likeRepository.deleteLikeByIds(userId, deckId);
        return likeMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}

export default {
    addLike,
    getAllLikes,
    getAllLikesByUserId,
    deleteLikeByIds
}