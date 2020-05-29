import { Component, OnInit } from '@angular/core';
import { Bloginterface} from '../bloginterface';
import { BlogcontrolService } from '../blogcontrol.service';

@Component({
  selector: 'app-leadersadmin',
  templateUrl: './leadersadmin.component.html',
  styleUrls: ['./leadersadmin.component.scss']
})
export class LeadersadminComponent implements OnInit {

  data : Bloginterface = {
    name: "Ajala",
    picture : "",
    office : "Teanager organizer"
  }

  constructor(public service : BlogcontrolService) { 
    this.createProfile()
  }

  createProfile(){
    this.service.createLeaderProfile(this.data).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }

  updateProfile(){
    this.service.updateLeaderProfile(this.data, 2).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

  getAllProfiles(){
    this.service.getAllLeaderProfile().subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

  getProfile(){
    this.service.getLeaderProfileById(2).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

  deleteProfile(){
    this.service.deleteLeaderProfileById(2).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

  ngOnInit() {
  }

}
