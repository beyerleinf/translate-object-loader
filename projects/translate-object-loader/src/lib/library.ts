import { TranslationDefinition } from './models';
import { Util } from './util';

export class Library {
  private static translationDefinitions: TranslationDefinition = {};

  /**
   * Add translation definitions to the translation library.
   * You can even add multiple definitions at the same time.
   *
   * The root should always contain language abbrevations like `de` or `en` to be able to select a language.
   *
   * @param arg The definitions to add.
   */
  static add(...arg: TranslationDefinition[]): void {
    Library.translationDefinitions = Util.merge(Library.translationDefinitions, ...arg);
  }

  /**
   * Gets the object containing all registered translation definitions for the given `language`.
   *
   * @param language The language to get the translation in.
   * @returns All registered translation definitions for the given `language`.
   * @internal
   */
  static get(language: string): TranslationDefinition {
    return Library.translationDefinitions[language];
  }
}
