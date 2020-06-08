import { Component, OnInit } from '@angular/core';
import { Bloginterface} from '../bloginterface';
import { BlogcontrolService } from '../blogcontrol.service';
import { isNull } from 'util';
import { Upload } from '../upload';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leadersadmin',
  templateUrl: './leadersadmin.component.html',
  styleUrls: ['./leadersadmin.component.scss'],
  providers: [Upload]
})
export class LeadersadminComponent implements OnInit {
  image = ''
  newProfile : boolean = true
  manageProfile: boolean = false
  allProfiles: boolean = false
  loading: boolean = false
  message: string = ''
  error: boolean = false
  success: boolean = false
  key = localStorage.getItem('delightAccessKey');

  data : Bloginterface = {
    name: "",
    picture : "",
    office : ""
  }

  profiles: any

  constructor(public route: Router, public service : BlogcontrolService, public upload: Upload) { 
    // this.createProfile()
    if(!this.key){
      this.route.navigate(['admin/login'], {replaceUrl: true})
      return
    }
    this.getAllProfiles()
  }

  imageUpload(event:any){
    this.image = this.upload.imageUpload(event)
  }

  createProfile(){
    this.loading = true
   
    
    if (this.data.name === '' || this.data.office === '') {
      this.error = true
      this.message = "Title or office should not be left empty"
      this.loading = false
      return
    }
    else{
      let formData = this.upload.formData(this.image)
      this.service.uploadImage(formData).toPromise()
      .then(res => {
        if(isNull(res)){
          this.data.picture = null
        }else{
          this.data.picture = res['url']
        }
      })
      .then(()=>{
        this.processProfile()
        this.loading = false
      })
      .catch(err => {
        this.loading = false
        console.log(err)
      })
    }
  }

  processProfile(){
    this.service.createLeaderProfile(this.data).toPromise().
    then(res => {
      this.success = true
      this.error = false
      this.message = "Profile created"
        this.data.name = ''
        this.data.office = ''
        this.data.picture = ''
        this.getAllProfiles()
    }).catch(err =>{
      this.error = true
      this.success = false
      this.message = "leader name and office cannot be left empty"
    })
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
