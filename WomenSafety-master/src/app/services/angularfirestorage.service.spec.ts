import { TestBed } from '@angular/core/testing';

import { AngularfirestorageService } from './angularfirestorage.service';

describe('AngularfirestorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularfirestorageService = TestBed.get(AngularfirestorageService);
    expect(service).toBeTruthy();
  });
});
