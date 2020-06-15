import { Component, OnInit, HostListener } from '@angular/core';

export interface Values{ blog: string, title: string}

@Component({

  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public isShow:boolean
  topPosToStartShowing = 200


  constructor() {
   }


  @HostListener('window:scroll')
  checkScroll() {
    let check = document.getElementById('link').getBoundingClientRect().top
    if (check === 0) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  scrollToview(target:string){
    let element = document.getElementById(target)
    let top = element.getBoundingClientRect().top
    window.scrollTo({
      top: top + window.pageYOffset - 100,
      left: 0,
      behavior: "smooth"
    })
  }

  ngOnInit() {
  }
}
