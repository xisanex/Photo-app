import { TestBed } from '@angular/core/testing';

import { AddImageFormService } from './add-image-form.service';

describe('AddImageFormService', () => {
  let service: AddImageFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddImageFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
