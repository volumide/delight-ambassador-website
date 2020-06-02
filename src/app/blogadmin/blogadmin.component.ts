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

  public caption = {
    name: "",
    src : "",
    caption : ""
  }

  public blogContent

  constructor(public service : BlogcontrolService, public upload: Upload ) { 
    // this.createContent()
    this.getAllContents()
    // this.updateContent()
    // this.getContent()
    // this.deleteContent()
  }

  imageUpload(event:any){
    this.image = this.upload.imageUpload(event)
  }
  
  createContent(){
		try {

      let formData = this.upload.formData(this.image)

			this.service.uploadImage(formData).toPromise()
			.then(res => {
			console.log(res)
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
		} catch (error) {
			console.log(error)
		}
		
  }

  processData(){
    this.service.createBlog(this.data).toPromise()
    .then(res => {
		console.log(res)
		this.data.content = ""
		this.data.title = ""
    this.data.picture = ""
    this.getAllContents()
    }).catch(err =>{
      console.log(err)
    })
  }

  getAllContents(){
    this.service.getAllBlog().subscribe(
      res => {
        console.log(res['data'])
        this.blogContent = res['data']
      },
      err => console.error(err.error)
    )
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
      res => console.log(res),
      err => console.error(err.error)
    )
  }

  deleteComment(){
    this.service.deleteLeaderProfileById(2).subscribe(
      res => console.log(res),
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
