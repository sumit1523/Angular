import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees()
  {
    return [
      {id:1, name : 'Sibajee Ray', age : 24},
      {id:2, name : 'Sushant Behera', age : 24},
      {id:3, name : 'Subhasmita Mohapatra', age : 23},
      {id:4, name : 'Simadri  Mohapatra', age : 25}
    ]
  }
}
