import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { Library } from './library';

export class TranslateObjectLoader implements TranslateLoader {
  constructor() {}

  getTranslation(lang: string): Observable<any> {
    return of(Library.get(lang));
  }
}
