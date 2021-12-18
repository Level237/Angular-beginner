import { Component,Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() AppareilName:string | undefined;
 @Input() AppareilStatus:string | undefined;
 @Input() IndexOfAppareil:number ;

  constructor(private appareilservice:AppareilService) {

   }

  ngOnInit(): void {

  }

  getStatus(){
    return this.AppareilStatus;
  }
  getColor(){
    if(this.AppareilStatus === 'allumé'){
      return 'green';
    } else if(this.AppareilStatus === 'eteint'){
      return 'red';
    }
    return 'yellow';
  }
  OnSwitchOn(){
    this.appareilservice.switchOnOne(this.IndexOfAppareil);
  }

  OfSwitchOf(){
    this.appareilservice.switchOfOne(this.IndexOfAppareil);
  }

}
