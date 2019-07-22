import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyemergencyPage } from './myemergency.page';

describe('MyemergencyPage', () => {
  let component: MyemergencyPage;
  let fixture: ComponentFixture<MyemergencyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyemergencyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyemergencyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
