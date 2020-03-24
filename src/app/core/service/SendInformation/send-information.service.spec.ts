import { TestBed } from '@angular/core/testing';

import { SendInformationService } from './send-information.service';

describe('SendInformationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendInformationService = TestBed.get(SendInformationService);
    expect(service).toBeTruthy();
  });
});
