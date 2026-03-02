import type {Theme, ThemePayload} from "./theme.model";
import type {CreateThemeDto, ThemeDto} from "./theme.dto";

function dtoToObject(dto: ThemeDto): Theme {
    return {
        id: dto.id,
        name: dto.name,
    }
}

function objectToDto(deck: ThemePayload): CreateThemeDto {
    return {
        name: deck.name,
    }
}

export default {
    dtoToObject,
    objectToDto
}