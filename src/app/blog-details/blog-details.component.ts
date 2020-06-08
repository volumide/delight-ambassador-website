import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogcontrolService } from '../blogcontrol.service';
import { isNull, isUndefined } from 'util';
import { Bloginterface } from '../bloginterface';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

  modules = {
    toolbar: ''
  }

  data: Bloginterface ={
    alias: "",
    blog_id: "",
    comment: "",
    reference: ""
  }
  comment: string
  content
  allcomment

  constructor(public router: ActivatedRoute, public service : BlogcontrolService) { 
   this.getArticleDetails()
   this.data.reference = localStorage.getItem('reference')
   localStorage.removeItem('refernce')
  }

  getArticleDetails(){
    this.router.paramMap.subscribe(res => {{
      let title = res['params'].id.split('@')[1].split('-').join(' ')

      this.service.getBlogByTitle(title).toPromise()
      .then(res => {
        console.log(res['data'], res['writter'])
        this.content = res['data']
        localStorage.setItem('reference', this.content.title)
      })
      .then(() =>{
        this.getCurrentblogComment(this.content.id)
      })
      .catch(err => {
        console.log(err)
      })
    }})
  }

  postComment(id){
    if (isNull(this.comment) || typeof this.comment === 'undefined'){
      console.log(this.comment)
      console.log('comment cannot be empty')
      return
    }
    this.data.comment = this.comment
    this.data.blog_id = id


    this.service.postComment(this.data).toPromise()
    .then(res => {
      console.log(res)
      this.getArticleDetails()
    })
    .catch(err => console.log(err)
    )    
  }

  getCurrentblogComment(id){
    this.service.getCommentyId(id).toPromise()
    .then(res=> {
      this.allcomment = res['data']
      console.log(this.allcomment)
    })
    .catch(err => console.log(err))
  }
  ngOnInit() {
  }

}
