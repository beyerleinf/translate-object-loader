import { TestBed } from '@angular/core/testing';

import { TranslateObjectLoaderService } from './translate-object-loader.service';

describe('TranslateObjectLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TranslateObjectLoaderService = TestBed.get(TranslateObjectLoaderService);
    expect(service).toBeTruthy();
  });
});
