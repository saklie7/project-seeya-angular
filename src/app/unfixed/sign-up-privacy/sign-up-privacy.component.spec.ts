import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpPrivacyComponent } from './sign-up-privacy.component';

describe('SignUpPrivacyComponent', () => {
  let component: SignUpPrivacyComponent;
  let fixture: ComponentFixture<SignUpPrivacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpPrivacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
