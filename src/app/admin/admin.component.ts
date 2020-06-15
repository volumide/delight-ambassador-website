import { Component, OnInit } from '@angular/core';
import { BlogcontrolService } from '../blogcontrol.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  loading :boolean = true
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

  admin:any = ''
  key = localStorage.getItem('delightAccessKey');
  constructor(public route: Router, public service: BlogcontrolService) { 
    if(!this.key){
      this.route.navigate(['admin/login'], {replaceUrl: true})
      return
    }
    this.countAll()
  }

  countAll(){
    this.service.countAll().subscribe(
      res => {
        this.blog.count = res['blog']
        this.profile.count = res['profile']
        this.events.count = res['event']
        this.gallery.count= res['gallery']
        this.comment.count = res['comment']
        this.loading = false
      },
      err => {})
  }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('delightAccessKey')
    this.route.navigate(['admin/login'], {replaceUrl: true})
  }
}
