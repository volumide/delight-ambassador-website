import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallaryadmin',
  templateUrl: './gallaryadmin.component.html',
  styleUrls: ['./gallaryadmin.component.scss']
})
export class GallaryadminComponent implements OnInit {

  allimage:boolean = false
  newImage:boolean = false

  constructor() { }

  ngOnInit() {
  }

  addNewImage(){
    this.allimage = false
    this.newImage = true
  }

  manageAllImage(){
    this.newImage = false
    this.allimage = true
  }
}
