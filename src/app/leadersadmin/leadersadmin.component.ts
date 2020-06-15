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
  admin = localStorage.getItem('delightStatus')
  publicCheck: string

  data : Bloginterface = {
    name: "",
    picture : "",
    office : "",
    loginCode: "",
    about: "",
    public: "private",
  }

  profiles: any

  constructor(public route: Router, public service : BlogcontrolService, public upload: Upload) { 
    if(!this.key){
      this.route.navigate(['admin/login'], {replaceUrl: true})
      return
    }
    this.getAllProfiles()
  }

  imageUpload(event:any){
    this.image = this.upload.imageUpload(event)
  }

  makePublic(ev){
    let event = ev.target.checked ? 'public' : 'private'
    this.data.public = event
  }

  createProfile(){
    this.loading = true
    if (this.data.name === '' || this.data.office === '' || isNull(this.data.about) || typeof this.data.about == 'undefined' || this.data.loginCode == '') {
      this.error = true
      this.message = "Every input field is required"
      this.loading = false
      return
    }

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
    })
    
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
        this.data.about = ''
        this.getAllProfiles()
    }).catch(err =>{
      this.error = true
      this.success = false
      this.message = "leader name and office cannot be left empty"
    })
  }

  updateProfile(){
    this.service.updateLeaderProfile(this.data, 2).subscribe(
      res => {},
      err => {}
    )
  }

  getAllProfiles(){
    this.service.getAllLeaders().subscribe(
      res =>{
        this.profiles = res['data']
      },
      err => {}
    )
    
  }

  getProfile(){
    this.service.getLeaderProfileById(2).subscribe(
      res => {},
      err => {}
    )
  }

  deleteProfile(id){
    this.loading = true
    this.service.deleteLeaderProfileById(id).subscribe(
      res => {  
        this.getAllProfiles()
        this.loading = false
      },
      err => {
        this.loading = false
      }
    )
  }

  writterPriviledge(id){
    this.service.writterAccess(id).subscribe( res => {
      this.getAllProfiles()
    }, err =>{
    })
  }

  revokewritterPriviledge(id){
    this.service.removewritterAccess(id).subscribe( res => {
      this.getAllProfiles()
    }, err =>{
    })
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
