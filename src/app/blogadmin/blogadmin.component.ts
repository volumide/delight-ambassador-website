import { Component, OnInit } from '@angular/core';
import { BlogcontrolService } from '../blogcontrol.service';
import {Bloginterface} from '../bloginterface'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-blogadmin',
  templateUrl: './blogadmin.component.html',
  styleUrls: ['./blogadmin.component.scss']
})
export class BlogadminComponent implements OnInit {

  editor = true
  blog = false
  comment = false

  public data: Bloginterface = {
    content : "",
    picture : "",
    title : ""
  }

  public comments: Bloginterface = {
    alias : "",
    blog_id : "",
    comment : "",
  }

  constructor(public service : BlogcontrolService ) { 
    // this.createContent()
    // this.getAllContent()
    // this.updateContent()
    // this.getContent()
    this.deleteContent()
  }

  createContent(){
    this.data.content = "This is another content"
    this.data.title = "creating content"
    this.service.createBlog(this.data).subscribe(
      res => console.log(res), 
      err => console.log(err['error'])
    )
  }

  getAllContents(){
    this.service.getAllBlog().subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }

  updateContent(){
    this.data.content = "working"
    this.data.title = "help"
    this.service.updateBlog(this.data, 2).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

  getContent(){
    this.service.getBlogById(2).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

  deleteContent(){
    this.service.deleteBlogById(3).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

  getAllComments(){
    this.service.getAllComment().subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

  deleteComment(){
    this.service.deleteLeaderProfileById(2).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }



  editorStyle = {
    height: 'calc(100vh - 200px)',
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
