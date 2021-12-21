import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/User.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  userForm:FormGroup;
  constructor(private formbuilder:FormBuilder,private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  OnSubmitForm(){
    const formValue=this.userForm.value;
    const newUser=new User(
      formValue['firstName'],
      formValue['LastName'],
      formValue['email'],
      formValue['drinkPreference'],
      formValue['hobbies']
    );
    this.userservice.addUser(newUser);
    this.router.navigate(['/users'])
  }

  initForm(){
    this.userForm=this.formbuilder.group({
      firstName:['',Validators.required],
      LastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      drinkPreference:['',Validators.required],
      hobbies:['',Validators.required]
    })
  }

}
