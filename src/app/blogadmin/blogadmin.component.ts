import { Component, OnInit } from '@angular/core';
import { BlogcontrolService } from '../blogcontrol.service';
import {Bloginterface} from '../bloginterface'
import { Observable } from 'rxjs'
import { isNull } from 'util';
import { Upload } from '../upload';


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

  constructor(public service : BlogcontrolService, public upload: Upload ) { 
    this.getAllContents()
    this.getAllComments()
  }


  imageUpload(event:any){
    this.image = this.upload.imageUpload(event)
  }
  
  createContent(){
    if (isNull(this.data.content || typeof this.data.content || isNull(this.data.title || typeof this.data.title == 'undefined'))) {
      this.message = "Title or content cannotshould not be left empty"
      return
    }else{
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
        })
        .catch(err => console.log(err))
      } 
  }

  processData(){
    this.service.createBlog(this.data).toPromise()
    .then(res => {
    console.log(res)
    this.success = true
    this.error = false
    this.message = "Aritcle created"
		this.data.content = ""
		this.data.title = ""
    this.data.picture = ""
    this.getAllContents()
    }).catch(err =>{
      this.error = true
      this.success = false
      this.message = "Title and content cannot be left empty"
      // console.log(err)
    })
  }

  getAllContents(){
    this.service.getAllBlog().toPromise()
    .then(
      res =>{
        this.blogContent = res['data']
      } 
      ,err => console.error(err.error)
    ).catch(err => console.log(err))
  }

  updateContent(){
    this.data.content = "working"
    this.data.title = "help"
    this.service.updateBlog(this.data, 2).subscribe(
      res => {

        console.log(res)
      },
      err => console.log(err.error)
    )
  }

  getContent(){
    this.loading = true
    this.service.getBlogById(2).subscribe(
      res => console.log(res),
      err => console.error(err.error)
    )
    this.loading = false
  }

  deleteContent(id){
    this.loading = true
    this.service.deleteBlogById(id).subscribe(
      res => {
        console.log(res)
        this.getAllContents()
      },
      err => console.error(err.error),
    )
    this.loading = false
  }

  getAllComments(){
    this.service.getAllComment().subscribe(
      res => {
        // console.log(res)
        this.allcomment = res['data']
        // console.log
        // (this.allcomment)
      },
      err => console.error(err.error)
    )
  }

  deleteComment(id){
    this.service.deleteCommentById(id).subscribe(
      res => {
        this.getAllComments()
      },
      err => console.log(err.error)
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
