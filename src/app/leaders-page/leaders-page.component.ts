import { Component, OnInit } from '@angular/core';
import { BlogcontrolService } from '../blogcontrol.service';

@Component({
  selector: 'app-leaders-page',
  templateUrl: './leaders-page.component.html',
  styleUrls: ['./leaders-page.component.scss']
})
export class LeadersPageComponent implements OnInit {

  allData: object 

  constructor(public service : BlogcontrolService) { 
    
  }

  getPublicProfile(){
    this.service.getAllLeaderProfile().subscribe(
      res => {
        this.allData = res['data']
      },
      err => {
      }
    )
  }

  ngOnInit() {
    this.getPublicProfile()
  }

}
