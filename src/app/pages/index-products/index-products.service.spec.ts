import { TestBed } from '@angular/core/testing';

import { IndexProductsService } from './index-products.service';

describe('IndexProductsService', () => {
  let service: IndexProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndexProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
