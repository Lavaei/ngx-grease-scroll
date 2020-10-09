import { TestBed } from '@angular/core/testing';

import { GreaseScrollService } from './grease-scroll.service';

describe('GreaseScrollService', () => {
  let service: GreaseScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreaseScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
