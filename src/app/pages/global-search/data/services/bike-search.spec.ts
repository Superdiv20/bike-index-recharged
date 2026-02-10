import { TestBed } from '@angular/core/testing';

import { BikeSearch } from './bike-search';

describe('BikeSearch', () => {
  let service: BikeSearch;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikeSearch);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
