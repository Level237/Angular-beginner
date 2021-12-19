import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.css']
})
export class SingleAppareilComponent implements OnInit {

  name:string='appareil';
  status:string='status';

  constructor(private appareilservice:AppareilService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id =this.route.snapshot.params['id'];
    this.name=this.appareilservice.getAppareilById(+id).name;
    this.status=this.appareilservice.getAppareilById(+id).status;
  }

}
