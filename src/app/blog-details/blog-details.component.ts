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
    reference: "",
  }
  comment: string
  writter
  content
  allcomment

  constructor(public router: ActivatedRoute, public service : BlogcontrolService) { 

  }

  getArticleDetails(){
    this.router.paramMap.subscribe(res => {{
      let title = res['params'].id.split('@')[1].split('-').join(' ')

      this.service.getBlogByTitle(title).toPromise()
      .then(res => {
        this.content = res['data']
        this.writter = res['writter']
        localStorage.setItem('reference', this.content.title)
      })
      .then(() =>{
        this.getCurrentblogComment(this.content.id)
      })
      .catch(err => {
      })
    }})
  }

  postComment(id){
    if (isNull(this.comment) || typeof this.comment === 'undefined'){
      return
    }
    this.data.comment = this.comment
    this.data.blog_id = id


    this.service.postComment(this.data).toPromise()
    .then(res => {
      this.getArticleDetails()
      this.data.alias = ''
      this.comment = ''
    })
    .catch(err => {}
    )    
  }

  getCurrentblogComment(id){
    this.service.getCommentyId(id).toPromise()
    .then(res=> {
      this.allcomment = res['data']
    })
    .catch(err => {})
  }
  ngOnInit() {
    this.getArticleDetails()
   this.data.reference = localStorage.getItem('reference')
   localStorage.removeItem('refernce')
  }

}
