import { TestBed } from '@angular/core/testing';

import { MomentumService } from './momentum.service';

describe('MomentumService', () => {
  let service: MomentumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MomentumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
