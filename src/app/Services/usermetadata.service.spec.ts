import { TestBed, inject } from '@angular/core/testing';

import { UsermetadataService } from './usermetadata.service';

describe('UsermetadataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsermetadataService]
    });
  });

  it('should be created', inject([UsermetadataService], (service: UsermetadataService) => {
    expect(service).toBeTruthy();
  }));
});
