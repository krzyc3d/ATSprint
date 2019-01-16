import { TestBed } from '@angular/core/testing';

import { LocalStorageChatService } from './local-storage-chat.service';

describe('LocalStorageChatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalStorageChatService = TestBed.get(LocalStorageChatService);
    expect(service).toBeTruthy();
  });
});
