import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService  {
  baseURl: string = "https://localhost:7025/api/";
  auth: any;
  requestOptions: any;

  constructor() {}

}