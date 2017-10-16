import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHotComponent } from './main-hot.component';

describe('MainHotComponent', () => {
  let component: MainHotComponent;
  let fixture: ComponentFixture<MainHotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainHotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
