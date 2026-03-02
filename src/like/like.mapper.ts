import type {Like, LikePayload} from "./like.model";
import type {CreateLikeDto, LikeDto} from "./like.dto";
import userMapper from "../user/user.mapper";

function dtoToObject(dto: LikeDto)/*: Like */{

    /*return {

    }*/
}

function objectToDto(deck: LikePayload)/*: CreateLikeDto */{
    /*return {
        name: deck.name,
        timestamp: deck.timestamp,
        userId: deck.user.id,
    }*/
}

export default {
    dtoToObject,
    objectToDto
}