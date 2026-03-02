import type {Language} from "./language.model";

export interface LanguageDto extends Language {}

export interface CreateLanguageDto extends Omit<Language, 'id'> {}