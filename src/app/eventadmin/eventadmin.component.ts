import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventadmin',
  templateUrl: './eventadmin.component.html',
  styleUrls: ['./eventadmin.component.scss']
})
export class EventadminComponent implements OnInit {

  constructor() { }

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
