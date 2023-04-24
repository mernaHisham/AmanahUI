import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {  User } from "../Models/user.model";
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService{
  user:User=new User();
  LogedIn:boolean=false;
   headers:HttpHeaders= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
  
  constructor(private http: HttpClient) { super(); }

  Login =()=>
    this.http.post(`${this.baseURl}Login/Login`,this.user);

  IsLogedIn = () =>
   this.LogedIn= sessionStorage.getItem("accesstoken")==null?false:true
  
}