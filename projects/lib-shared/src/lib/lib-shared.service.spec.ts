import { TestBed } from '@angular/core/testing';

import { LibSharedService } from './lib-shared.service';

describe('LibSharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibSharedService = TestBed.get(LibSharedService);
    expect(service).toBeTruthy();
  });
});
