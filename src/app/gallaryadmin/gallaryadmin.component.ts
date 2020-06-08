import { Component, OnInit } from '@angular/core';
import { Bloginterface} from '../bloginterface';
import { BlogcontrolService } from '../blogcontrol.service';
import { isNull } from 'util';
import { Upload } from '../upload';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallaryadmin',
  templateUrl: './gallaryadmin.component.html',
  styleUrls: ['./gallaryadmin.component.scss'],
  providers: [Upload]
})
export class GallaryadminComponent implements OnInit {

  allimage:boolean = false
  newImage:boolean = true
  image = ''
  loading:boolean
  message: string = ''

  data : Bloginterface = {
    caption: "",
    picture : "",
  }
  allImages: object[]
  key = localStorage.getItem('delightAccessKey');

  constructor( public route: Router, public service : BlogcontrolService, public upload: Upload) {

    if(!this.key){
      this.route.navigate(['admin/login'], {replaceUrl: true})
      return
    }
    this.getallGalleryImages()
   }

  ngOnInit() {
  }

  imageUpload(event:any){
    this.image = this.upload.imageUpload(event)
  }

  uploadNewImage(){
    this.loading = true
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
      this.processImage()
      this.loading = false
    })
    .catch(err => {
      this.loading = false
    })
  }

  processImage(){
    this.service.uploadGalleryImage(this.data).toPromise()
    .then(res => {
        // console.log(res)
        this.data.caption = ""
        this.data.picture = ""
        this.message = 'Upload successfull'
        this.getallGalleryImages()
    }).catch(err =>{
      // console.log(err)
    })
    
  }

  getallGalleryImages(){
    this.service.getAllImages().toPromise()
    .then(res =>{
      if (res['data']) {
        this.allImages = res['data']
      }
    }).catch(err => {
      
    })
  }

  deleteImage(id:any){
    this.service.deleteImageById(id).subscribe(
      res => {
        console.log(res)
        this.getallGalleryImages()
      },
      err => {
        // console.log(err)
      }
    )
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
