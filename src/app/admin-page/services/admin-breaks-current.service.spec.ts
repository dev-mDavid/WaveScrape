import { TestBed } from '@angular/core/testing';

import { AdminBreaksCurrentService } from './admin-breaks-current.service';

describe('AdminBreaksCurrentService', () => {
  let service: AdminBreaksCurrentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminBreaksCurrentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
