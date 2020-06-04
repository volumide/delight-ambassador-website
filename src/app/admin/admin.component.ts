import { Component, OnInit } from '@angular/core';
import { BlogcontrolService } from '../blogcontrol.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  blog = {
    title: "Blog",
    description: "all blog records here",
    count: ""
  }

  profile = {
    title: "Profile",
    description: "all leaders profile records here",
    count: ""
  }

  events = {
    title: "Events",
    description: "all Events records here",
    count: ""
  }

  gallery = {
    title: "Gallery",
    description: "all gallery records here",
    count: ""
  }

  comment = {
    title: "Comments",
    description: "all gallery records here",
    count: ""
  }

  constructor(public service: BlogcontrolService) { 
    this.countAll()
  }

  countAll(){
    this.service.countAll().subscribe(
      res => {
        console.log(res)
        this.blog.count = res['blog']
        this.profile.count = res['profile']
        this.events.count = res['event']
        this.gallery.count= res['gallery']
        this.comment.count = res['comment']
      },
      err => console.error(err))
  }

  ngOnInit() {
  }

}
