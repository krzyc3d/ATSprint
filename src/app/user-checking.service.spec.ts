import { TestBed } from '@angular/core/testing';

import { UserCheckingService } from './user-checking.service';

describe('UserCheckingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserCheckingService = TestBed.get(UserCheckingService);
    expect(service).toBeTruthy();
  });
});
