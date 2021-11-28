import en from "./en.json";
import fr from "./fr.json";

enum Locales {
    EN = 'en',
    FR = 'fr',
}

const LOCALES = [
    { value: Locales.EN, caption: 'English' },
    { value: Locales.FR, caption: 'Français' }
]

export const messages = {
    [Locales.EN]: en,
    [Locales.FR]: fr
};

export const defaultLocale = Locales.FR;
