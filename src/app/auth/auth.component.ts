import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


   authStatus:boolean;
  constructor(private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.authStatus=this.authservice.isAuth;
  }
  
  onSignIn(){
    this.authservice.signIn().then(
      ()=>{
        this.authStatus=this.authservice.isAuth;
        this.router.navigate(['appareils']);
      }
    );
  }
  onSignOut(){
    this.authservice.signOut();
    this.authStatus=this.authservice.isAuth;
  }
}
