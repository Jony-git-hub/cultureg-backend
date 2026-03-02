import type {Theme} from "./theme.model";

export interface ThemeDto extends Theme {}

export interface CreateThemeDto extends Omit<Theme, 'id'> {}