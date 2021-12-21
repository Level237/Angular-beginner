import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../models/User.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit,OnDestroy{

  users:User[];
  userSubscription:Subscription;
  constructor(private  userservice:UserService) { }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.userSubscription=this.userservice.userSubject.subscribe(
      (user:User[]) =>{
        this.users=user;
      }
    );
    this.userservice.emitUsers();
  }

}
