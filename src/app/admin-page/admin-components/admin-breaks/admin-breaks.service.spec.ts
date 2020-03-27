import { TestBed } from '@angular/core/testing';

import { AdminBreaksService } from './admin-breaks.service';

describe('AdminBreaksService', () => {
  let service: AdminBreaksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminBreaksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
