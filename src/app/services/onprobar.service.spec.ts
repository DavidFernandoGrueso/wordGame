import { TestBed } from '@angular/core/testing';

import { OnprobarService } from './onprobar.service';

describe('OnprobarService', () => {
  let service: OnprobarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnprobarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
