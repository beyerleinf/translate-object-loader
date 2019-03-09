import {Library} from './library';
import {TranslateObjectLoader} from './translate-object-loader';

describe('TranslateObjectLoader', () => {
  let loader: TranslateObjectLoader;

  beforeEach(() => {
    loader = new TranslateObjectLoader();
  });

  describe('getTranslation', () => {
    it('should return registered translations from library for correct language', (done) => {
      const translations = {de: {something: 'abc'}, en: {else: 'def'}};
      spyOn(Library, 'get')
          .withArgs('de')
          .and.returnValue(translations.de)
          .withArgs('en')
          .and.returnValue(translations.en);

      loader.getTranslation('en').subscribe(t => {
        expect(t).toEqual(translations.en);
        done();
      });
    });
  });
});
