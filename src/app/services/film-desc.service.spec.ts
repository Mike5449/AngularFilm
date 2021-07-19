import { TestBed } from '@angular/core/testing';

import { FilmDescService } from './film-desc.service';

describe('FilmDescService', () => {
  let service: FilmDescService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmDescService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
