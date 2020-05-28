import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  blog = {
    title: "Blog",
    description: "all blog records here",
    count: "30"
  }

  profile = {
    title: "Profile",
    description: "all leaders profile records here",
    count: "30"
  }

  events = {
    title: "Events",
    description: "all Events records here",
    count: "30"
  }

  gallery = {
    title: "Gallery",
    description: "all gallery records here",
    count: "30"
  }
  constructor() { }

  ngOnInit() {
  }

}
