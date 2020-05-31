import { Component, OnInit } from '@angular/core';
import { Bloginterface} from '../bloginterface';
import { BlogcontrolService } from '../blogcontrol.service';

@Component({
  selector: 'app-leadersadmin',
  templateUrl: './leadersadmin.component.html',
  styleUrls: ['./leadersadmin.component.scss']
})
export class LeadersadminComponent implements OnInit {

  newProfile : boolean = true
  manageProfile: boolean = false
  allProfiles: boolean = false
  loading: boolean = false
  data : Bloginterface = {
    name: "Ajala",
    picture : "",
    office : "Teanager organizer"
  }

  profiles: any

  // card = {
  //   name: "",
  //   caption : "Tolu"
  // }

  constructor(public service : BlogcontrolService) { 
    // this.createProfile()
    this.getAllProfiles()
  }

  createProfile(){
    this.service.createLeaderProfile(this.data).subscribe(
      data => {
        console.log(data)
        this.data.name = ''
        this.data.office = ''
        this.getAllProfiles()
      },
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
      res =>{
        this.profiles = res['data']
        console.log(res)

      },
      err => console.log(err)
    )
    
  }

  getProfile(){
    this.service.getLeaderProfileById(2).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

  deleteProfile(id){
    this.loading = true
    this.service.deleteLeaderProfileById(id).subscribe(
      res => {  
        console.log(res)
        this.getAllProfiles()
        this.loading = false
      },
      err => {
        console.error(err)
        this.loading = false
      }
    )
  }

  showCreateProfile(){
    this.newProfile = true
    this.manageProfile = false
    this.allProfiles = false
  }

  showAllProfile(){
    this.newProfile = false
    this.manageProfile = false
    this.allProfiles = true
  }
  
  showManageProfile(){
    this.newProfile = false
    this.manageProfile = true
    this.allProfiles = false
  }

  ngOnInit() {
  }

}
