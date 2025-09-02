import { TestBed } from '@angular/core/testing';

import { IntentionsServiceService } from './intentions.service';

describe('IntentionsServiceService', () => {
  let service: IntentionsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntentionsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
