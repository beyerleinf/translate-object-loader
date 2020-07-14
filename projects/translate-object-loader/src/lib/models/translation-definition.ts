/**
 * @internal
 */
interface Translation {
  [key: string]: Translation | string;
}

export type TranslationDefinition = Translation | string;
