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
    this.name=this.route.snapshot.params['id'];
  }

}
