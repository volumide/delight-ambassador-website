import { Component, OnInit } from '@angular/core';
import { BlogcontrolService } from '../blogcontrol.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allProfile :any[] = []
  profiles: any[] = []
  blogContent: any[] = []
  content : any[]
  constructor(public service : BlogcontrolService) {
    this.getAllProfiles()
    this.getAllContents()
   }

  getAllProfiles(){
   
    this.service.getAllLeaderProfile().subscribe(
      res =>{
        this.allProfile = res['data']
        if (!res['data']) {
          this.profiles = []
        }else if(this.allProfile.length > 3){
          let length = this.allProfile.length
          let index = 0
          while (this.profiles.length < 3){
            this.profiles.push(this.allProfile[index])
            index++
          }
        }else{
          this.profiles.push(this.allProfile[0])
        }
      },
      err => {}
    )
  }

  split(url:any){
    return '@'+''+url.split(' ').join('-')
  }

  getAllContents(){
    let index = 0
    this.service.getAllBlog().subscribe(
      res => {
        this.content = res['data']
        if(!res['data']){
          this.blogContent = []
        }else if(this.content.length > 3){
          let length = this.content.length
          let index = 0
          while (this.blogContent.length < 3){
            this.blogContent.push(this.content[index])
            index++
          }
        }else{
            this.blogContent.push(this.content[0])
        }
      },
      err => {}
    )
  }

  ngOnInit() {
  }

}
