import {Spanish} from './Spanish';
import {English} from "./English";

export function languageSelected(language) {
    switch (language) {
        case 'Spanish':
            return Spanish;
        case 'English':
            return English;
        default:
            return null;
    }
}
