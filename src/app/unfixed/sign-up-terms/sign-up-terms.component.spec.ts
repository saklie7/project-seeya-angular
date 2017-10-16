import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpTermsComponent } from './sign-up-terms.component';

describe('SignUpTermsComponent', () => {
  let component: SignUpTermsComponent;
  let fixture: ComponentFixture<SignUpTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
