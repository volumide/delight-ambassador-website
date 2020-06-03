import { Component, OnInit } from '@angular/core';
import { BlogcontrolService } from '../blogcontrol.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  profiles :any = []

  constructor(public service : BlogcontrolService) {
    this.getAllProfiles()
   }

  getAllProfiles(){
   
    this.service.getAllLeaderProfile().subscribe(
      res =>{
        this.profiles = res['data']
        console.log(this.profiles)  

      },
      err => console.log(err)
    )
    
  }

  ngOnInit() {
  }

}
