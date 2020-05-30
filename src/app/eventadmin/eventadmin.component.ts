import { Component, OnInit } from '@angular/core';
import { Bloginterface} from '../bloginterface';
import { BlogcontrolService } from '../blogcontrol.service';

@Component({
  selector: 'app-eventadmin',
  templateUrl: './eventadmin.component.html',
  styleUrls: ['./eventadmin.component.scss']
})
export class EventadminComponent implements OnInit {

  constructor(public service : BlogcontrolService) { }
  loading: boolean = false
  data : Bloginterface = {
    title: "Ajala",
    picture : "",
    content : "Teanager organizer"
  }
  newEvent:boolean =true
  events:boolean = false
  allevents: any

  CreateNewEvent(){
    this.loading = true
    this.service.createEvent(this.data).subscribe(
      data => {
        console.log(data)
        this.getallEvents()
        this.data.title = ""
        this.data.content = ""
      },
      err => console.log(err)
    )
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
