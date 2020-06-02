import { Component, OnInit } from '@angular/core';
import { Bloginterface} from '../bloginterface';
import { BlogcontrolService } from '../blogcontrol.service';
import { isNull } from 'util';
import { Upload } from '../upload';

@Component({
  selector: 'app-eventadmin',
  templateUrl: './eventadmin.component.html',
  styleUrls: ['./eventadmin.component.scss'],
  providers: [Upload]
})
export class EventadminComponent implements OnInit {

  constructor(public service : BlogcontrolService, public upload: Upload) { }
  loading: boolean = false
  data : Bloginterface = {
    title: "Ajala",
    picture : "",
    content : "Teanager organizer"
  }
  image = ''

  newEvent:boolean =true
  events:boolean = false
  allevents: any

  imageUpload(event:any){
    this.image = this.upload.imageUpload(event)
  }

  createNewEvent(){
    try {
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
			})
			.catch(err => console.log(err))
    } catch (error) {
      
    }
  }

  processEvent(){
    this.loading = true
    this.service.createEvent(this.data).toPromise()
    .then(res => {
        this.getallEvents()
        this.data.title = ""
        this.data.content = ""
        this.data.picture = ""
    }).catch(err =>{
      console.log(err)
    })
    this.loading = false
  }

  updateEvent(){
    this.service.updateEvent(this.data, 2).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

  getallEvents(){
    this.service.getAllEvents().subscribe(
      res => {
        console.log(res)
          this.allevents = res['data']
          if (res['message']) {
            console.log(res['message'])
          }
          // 
      },
      err => console.log(err)
    )
  }

  getEvent(){
    this.service.getEventById(2).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

  deleteEvent(id:any){
    this.service.deleteEventById(id) .subscribe(
      res => {
        console.log(res)
        this.getallEvents()
      },
      err => console.log(err)
    )
  }

  

  ngOnInit() {
    this.getallEvents()
  }

  newEvents(){
    this.newEvent = true
    this.events = false
  }

  manageEvents(){
    if (this.allevents) {
      console.log(this.allevents)
    }
    this.newEvent = false
    this.events = true
  }
}
