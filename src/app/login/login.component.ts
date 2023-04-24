import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  invalidLogin:boolean=false;
  constructor(public service:UserService,private router:Router){}
  
  login(){
   this.service.Login().subscribe(
     res => {
       const token = (<any>res).token;
       const username = (<any>res).loginUser.name;
       const usermail = (<any>res).loginUser.mail;
       
       sessionStorage.setItem("accesstoken",token);
       sessionStorage.setItem("username",username);
       sessionStorage.setItem("email",usermail);
       
       this.invalidLogin = false;
       this.router.navigate(["/invoice"]);
     }
     ,err =>{
       this.invalidLogin=true;
       console.log(err);
     });
  }
 }
 