import { Component, OnInit } from '@angular/core';
import { BlogcontrolService } from '../blogcontrol.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogContent:any = []
  constructor(public service : BlogcontrolService, public route: Router) { this.getAllContents() }

  ngOnInit() {
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

  redirect(ev:any){
    ev = 2
    this.route.navigate(['admin', 'content', 1])
  }

  split(url){
    return '@'+''+url.split(' ').join('-')
  }

  convert(date:any){
    let split = date.split('T')[0].split('-')
    let dates = new Date(split[0], split[1], split[2]).toString().split(' ')
    let confirmdate = dates[0] + ' ' + dates[1] + ' ' + dates[2] + ' ' + dates[3]
    return confirmdate
  }
}
