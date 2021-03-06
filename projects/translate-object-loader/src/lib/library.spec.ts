import { Library } from './library';
import { Util } from './util';

describe('Library', () => {
  let mergeSpy: jasmine.Spy;

  beforeEach(() => {
    mergeSpy = spyOn(Util, 'merge');
  });

  describe('add', () => {
    it('should assign merge result to translations', () => {
      const value = { de: { abc: 'def' }, en: { ghi: 'kjl' } };
      mergeSpy.and.returnValue(value);

      Library.add({ de: { something: 'abc' } });

      expect(Library.get('de')).toEqual({ abc: 'def' });
    });
  });

  describe('get', () => {
    it('should return correct object', () => {
      const value = { de: { abc: 'def' }, en: { ghi: 'kjl' } };
      mergeSpy.and.returnValue(value);

      Library.add({ de: { something: 'abc' } });

      expect(Library.get('en')).toEqual({ ghi: 'kjl' });
    });
  });
});
