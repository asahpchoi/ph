import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }

  getMsg () {
    return "PH Mock service"
  }
}
