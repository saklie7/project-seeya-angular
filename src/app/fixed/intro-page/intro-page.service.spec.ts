import { TestBed, inject } from '@angular/core/testing';

import { IntroPageService } from './intro-page.service';

describe('IntroPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntroPageService]
    });
  });

  it('should be created', inject([IntroPageService], (service: IntroPageService) => {
    expect(service).toBeTruthy();
  }));
});
