import { Component, OnInit } from '@angular/core';
import { BlogcontrolService } from '../blogcontrol.service';
import {Bloginterface} from '../bloginterface'
import { Observable } from 'rxjs'
import { isNull } from 'util';
import { Upload } from '../upload';
import { Router } from '@angular/router';


@Component({
  selector: 'app-blogadmin',
  templateUrl: './blogadmin.component.html',
  styleUrls: ['./blogadmin.component.scss'],
  providers: [Upload],
  
})
export class BlogadminComponent implements OnInit {

  editorStyle = {
    height: 'calc(100vh - 500px)',
    border: "none"
  };


  text:string
  textObject:string

  config = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link'],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }], 
    ]
  }

  editor = true
  blog = false
  comment = false
  loading: boolean = false
  image = ''
  error: boolean = false
  success: boolean = false
  message: string = ''

  public data: Bloginterface = {
    content : "",
    picture : "",
    title : ""
  }

  allcomment : object[]

  public caption = {
    name: "",
    src : "",
    caption : ""
  }

  modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'indent': '-1'}, { 'indent': '+1' }], 
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ]
  }

  public blogContent: []
  key = localStorage.getItem('delightAccessKey');
  admin = localStorage.getItem('delightStatus')

  constructor(public route: Router, public service : BlogcontrolService, public upload: Upload ) { 
    if(!this.key){
      this.route.navigate(['admin/login'], {replaceUrl: true})
      return
    }
    this.getAllContents()
    this.getAllComments()
  }


  imageUpload(event:any){
    this.image = this.upload.imageUpload(event)
  }
  
  createContent(){
    this.loading = true
    if (!this.key) {
      this.error = true
      this.message = "unauthorized to write"
      this.loading = false 
      return
    }
    if (isNull(this.data.content) || typeof this.data.content == 'undefined'  || this.data.title == '') {
      this.error = true
      this.message = "Title or content cannot not be left empty"
      this.loading = false 
      return
    }
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
      this.processData()
      this.loading = false
    })
    .catch(err => {
      this.loading = false
    })
      
  }

  processData(){
    this.service.createBlog(this.data, this.key).toPromise()
    .then(res => {
    if (res['message']) {
      this.success = true
      this.error = false
      this.message = res['message']
      this.data.content = ""
      this.data.title = ""
      this.data.picture = ""
      this.getAllContents()
    }else{
      this.error = true
      this.message = res['message']
    }
   
    }).catch(err =>{
      this.error = true
      this.success = false
      this.message = "Unable to create blog"
    })
  }

  getAllContents(){
    this.service.getAllBlog().toPromise()
    .then(
      res =>{
        this.blogContent = res['data']
      } 
      ,err => {}
    ).catch(err => {})
  }


  deleteContent(id){
    this.loading = true
    this.service.deleteBlogById(id).subscribe(
      res => {
        this.getAllContents()
      },
      err => {},
    )
    this.loading = false
  }

  getAllComments(){
    this.service.getAllComment().subscribe(
      res => {
        this.allcomment = res['data']
      },
      err => {}
    )
  }

  deleteComment(id){
    this.service.deleteCommentById(id).subscribe(
      res => {
        this.getAllComments()
      },
      err => {}
    )
  }

  newBlog(){
    this.editor = true
    this.blog = false
    this.comment = false
    
  }

  manageComment(){
    this.editor = false
    this.blog = false
    this.comment = true
  }
  
  manageBlog(){
    this.editor = false
    this.blog = true
    this.comment = false
  }

  
  ngOnInit() {
  }

}
