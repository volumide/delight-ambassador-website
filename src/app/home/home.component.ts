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
  blogContent: any[] 
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
          let index = 1
          while (this.profiles.length < 3){
            this.profiles.push(this.profiles[length-index])
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
    this.service.getAllBlog().subscribe(
      res => {
        if (res['data']) {
          let content:any[] = res['data']
          if (content.length < 0) {
            this.blogContent = []
          }else if (content.length > 3) {
            let length = content.length
            let index = 1
            while (this.blogContent.length < 4){
              this.blogContent.push(content[length-index])
              index++
            }
          }else{
            this.blogContent.push(content[content.length - 1])
          }
        }
        
      },
      err => {}
    )
  }

  ngOnInit() {
  }

}
