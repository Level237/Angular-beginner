import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppareilService } from '../services/appareil.service';
@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {

  isAuth=false;
 lastupdate= new Date();
 appareilSubscription:Subscription;

 appareils:any[] | undefined;
  constructor(private  appareilservice:AppareilService ){
    setTimeout(
      () => {
        this.isAuth=true;
      },
      4000
    );
  }
  ngOnInit(): void {
 this.appareilSubscription=this.appareilservice.appareilSubject.subscribe(
   (appareils:any[]) =>{
     this.appareils=appareils;
   }
 );
 this.appareilservice.emitAppareilSubject();
  }
OnAllumer(){
    this.appareilservice.switchOnAll();
  }
  OnEteindre(){
    this.appareilservice.switchOfAll();
  }

}
