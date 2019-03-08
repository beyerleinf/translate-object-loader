import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateObjectLoaderComponent } from './translate-object-loader.component';

describe('TranslateObjectLoaderComponent', () => {
  let component: TranslateObjectLoaderComponent;
  let fixture: ComponentFixture<TranslateObjectLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslateObjectLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslateObjectLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
