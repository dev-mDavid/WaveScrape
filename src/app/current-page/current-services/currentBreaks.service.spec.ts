import { TestBed } from '@angular/core/testing';

import { CurrentBreaksService } from './currentBreaks.service';

describe('CurrentBreaksService', () => {
  let service: CurrentBreaksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentBreaksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
