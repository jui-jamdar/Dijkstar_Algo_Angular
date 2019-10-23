import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LightYearCalcService {

  constructor() { }
  lightYearConst = 9460730472580800;
  passengertravelSpeed = 7500000000000;

}
