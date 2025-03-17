import plTranslation from "./pl.json";
import enTranslation from "./en.json";

type Language = "pl" | "en";
type Translations = Record<'nav' | 'main', Record<string, string>>;

function getUserLocalization(): Language {
    return navigator.language.startsWith('pl') ? 'pl' : 'en';
}

export function getTranslations(): Translations {
    const language: Language = getUserLocalization();
    return language === 'pl' ? plTranslation : enTranslation;
}

export const injectTranslation = (): void => {
    if (typeof document !== 'undefined') {
        const translations = getTranslations();
        Object.entries(translations).forEach(([section, values]) => {
            Object.entries(values).forEach(([key, text]) => {
                const element = document.getElementById(key);
                if (element) {
                    element.innerHTML = text;
                    console.log(key, text);
                }
            });
        });
    }
};

export class translation {
    
}