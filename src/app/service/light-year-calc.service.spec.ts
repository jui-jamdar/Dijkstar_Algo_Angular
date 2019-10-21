import { TestBed } from '@angular/core/testing';

import { LightYearCalcService } from './light-year-calc.service';

describe('LightYearCalcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LightYearCalcService = TestBed.get(LightYearCalcService);
    expect(service).toBeTruthy();
  });
});
