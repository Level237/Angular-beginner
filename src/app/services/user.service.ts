import { Subject } from "rxjs";
import { User } from "../models/User.model";

export class UserService{
  private users:User[]=[
    {
      firstName:'level',
      LastName:'brams',
      email:'bramslevel129@gmail.com',
      drinkPreference:'coca',
      hobbies:[
        'coder',
        'chanter'
      ]
    }
  ];
  userSubject=new Subject<User[]>();

  emitUsers(){
    this.userSubject.next(this.users.slice());
  }

  addUser(user:User){
    this.users.push(user);
    this.emitUsers();
  }
}
