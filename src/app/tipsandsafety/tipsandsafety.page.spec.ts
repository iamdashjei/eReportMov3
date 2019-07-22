import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsandsafetyPage } from './tipsandsafety.page';

describe('TipsandsafetyPage', () => {
  let component: TipsandsafetyPage;
  let fixture: ComponentFixture<TipsandsafetyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsandsafetyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsandsafetyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
