import { TestBed, async, inject } from '@angular/core/testing';

import { OrginzationGuard } from './orginzation.guard';

describe('OrginzationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrginzationGuard]
    });
  });

  it('should ...', inject([OrginzationGuard], (guard: OrginzationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
