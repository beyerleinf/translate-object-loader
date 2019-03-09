import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoModuleComponent } from './demo-module.component';

describe('DemoModuleComponent', () => {
  let component: DemoModuleComponent;
  let fixture: ComponentFixture<DemoModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
