import { TestBed } from '@angular/core/testing';

import { AddEditGuard } from './add-edit.guard';

describe('AddEditGuard', () => {
  let guard: AddEditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AddEditGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
