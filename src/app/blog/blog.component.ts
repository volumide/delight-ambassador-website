import { Component, OnInit } from '@angular/core';
import { BlogcontrolService } from '../blogcontrol.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogContent:any[] = []
  constructor(public service : BlogcontrolService) { 

  }

  ngOnInit() {
    this.getAllContents() 
    let date = new Date(2020, 6, 19)
    console.log(date.toDateString())
  }

  getAllContents(){
    this.service.getAllBlog().subscribe(
      res => {
        this.blogContent = res['data']
        this.blogContent.sort((a,b) => a.id - b.id )
      },
      err => {}
    )
  }
  // 2020-06-19
  split(url:any){
    return '@'+''+url.split(' ').join('-')
  }

  convert(date:any){
    let split = date.split('T')[0].split('-')
    let dates = new Date(split[0], split[1]-1, split[2]).toDateString().split(' ')
    let confirmdate = `${dates[0]}  ${dates[1]} ${dates[2]} ${dates[3]}`
    return confirmdate
  }
}
