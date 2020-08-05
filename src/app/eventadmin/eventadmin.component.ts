import { Component, OnInit } from '@angular/core';
import { Bloginterface} from '../bloginterface';
import { BlogcontrolService } from '../blogcontrol.service';
import { isNull } from 'util';
import { Upload } from '../upload';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventadmin',
  templateUrl: './eventadmin.component.html',
  styleUrls: ['./eventadmin.component.scss'],
  providers: [Upload]
})
export class EventadminComponent implements OnInit {

  message: string = ''
  error: boolean = false
  success: boolean = false
  loading: boolean = false
  key = localStorage.getItem('delightAccessKey');
  admin = localStorage.getItem('delightStatus')

  data : Bloginterface = {
    title: "",
    picture : "",
    content : ""
  }
  image = ''

  newEvent:boolean =true
  events:boolean = false
  allevents: any

  module = {
    toolbar :''
  }
  constructor(public route: Router, public service : BlogcontrolService, public upload: Upload) { 

  }
  
  imageUpload(event:any){
    this.image = this.upload.imageUpload(event)
  }

  createNewEvent(){
    this.loading = true
    if(this.data.title == '' || isNull(this.data.content) || typeof this.data.content == 'undefined'){
      this.error = true
      this.message = 'event brief and title cannot be left empty'
      this.loading = false
      return
    }else{
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
        this.processEvent()
        this.loading = false
			})
			.catch(err => {
        this.error = true
        this.message = 'cannot conect to the databse at this momment try again'
      })
    }
  }

  processEvent(){
    this.loading = true
    this.service.createEvent(this.data).toPromise()
    .then(res => {
        this.success = true
        this.error = false
        this.message = "Event created"
        this.getallEvents()
        this.data.title = ""
        this.data.content = ""
        this.data.picture = ""
    }).catch(err =>{
      this.error = true
      this.success = false
      this.message = "title and brief cannot be left empty"
    })
    this.loading = false
  }

  getallEvents(){
    this.service.getAllEvents().subscribe(
      res => {
          this.allevents = res['data']
          if (res['message']) {
          }
          // 
      },
      err =>{}
    )
  }

  deleteEvent(id:any){
    this.service.deleteEventById(id) .subscribe(
      res => {
        this.getallEvents()
      },
      err => {}
    )
  }

  ngOnInit() {
    if(!this.key){
      this.route.navigate(['admin/login'], {replaceUrl: true})
      return
    }
    this.getallEvents()
  }

  newEvents(){
    this.newEvent = true
    this.events = false
  }

  manageEvents(){
    if (this.allevents) {
    }
    this.newEvent = false
    this.events = true
  }
}
