import { Component, OnInit } from '@angular/core';
import { BlogcontrolService } from '../blogcontrol.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  allImages:object
  constructor( private service: BlogcontrolService) {
    
  }

  getAllImages(){
    this.service.getAllImages().subscribe(res => {
      this.allImages = res['data']
    }, err =>{})
  }

  ngOnInit() {
    this.getAllImages()
  }


}
