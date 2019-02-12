import { TestBed } from '@angular/core/testing';

import { LeasetableService } from './leasetable.service';

describe('LeasetableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeasetableService = TestBed.get(LeasetableService);
    expect(service).toBeTruthy();
  });
});
