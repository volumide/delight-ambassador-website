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

  data : Bloginterface = {
    title: "Ajala",
    picture : "",
    content : "Teanager organizer"
  }

  CreateNewEvent(){
    this.service.createEvent(this.data).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }

  updateEvent(){
    this.service.updateEvent(this.data, 2).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

  getallEvents(){
    this.service.getAllEvents().subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

  getEvent(){
    this.service.getEventyId(2).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

  deleteEvent(){
    this.service.getEventyId(2).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

  newEvent:boolean =false
  events:boolean = false

  ngOnInit() {
  }

  newEvents(){
    this.newEvent = true
    this.events = false
  }

  manageEvents(){
    this.newEvent = false
    this.events = true
  }
}
