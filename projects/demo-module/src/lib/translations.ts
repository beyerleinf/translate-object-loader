import { TranslationDefinition } from 'translate-object-loader';

export const firstModuleTranslations: TranslationDefinition = {
  de: {
    key1: 'Schlüssel1',
  },
  en: {
    key1: 'Key1',
  },
};

export const secondModuleTranslations: TranslationDefinition = {
  de: {
    key2: 'Schlüssel2',
  },
  en: {
    key1: 'Overwriting Key1',
    key2: 'Key2',
  },
};
