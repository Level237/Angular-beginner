import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {

  isAuth=false;
 lastupdate= new Date();

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
  this.appareils=this.appareilservice.appareils;
  }
OnAllumer(){
    this.appareilservice.switchOnAll();
  }
  OnEteindre(){
    this.appareilservice.switchOfAll();
  }

}
