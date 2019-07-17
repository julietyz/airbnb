import { TestBed } from '@angular/core/testing';

import { ImgListingURLMapService } from './img-listing-urlmap.service';

describe('ImgListingURLMapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImgListingURLMapService = TestBed.get(ImgListingURLMapService);
    expect(service).toBeTruthy();
  });
});
