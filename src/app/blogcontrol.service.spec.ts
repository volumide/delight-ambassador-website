import { TestBed } from '@angular/core/testing';

import { BlogcontrolService } from './blogcontrol.service';

describe('BlogcontrolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogcontrolService = TestBed.get(BlogcontrolService);
    expect(service).toBeTruthy();
  });
});
