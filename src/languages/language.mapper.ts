import type {CreateLanguageDto, LanguageDto} from "./language.dto";
import type {Language, LanguagePayload} from "./language.model";


function dtoToObject(dto: LanguageDto): Language {
    return {
        id: dto.id,
        name: dto.name,
        code: dto.code,
    }
}

function objectToDto(language: LanguagePayload): CreateLanguageDto {
    return {
        name: language.name,
        code: language.code,
    }
}

export default {
    dtoToObject,
    objectToDto
}