import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogcontrolService } from '../blogcontrol.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

  content: any
  constructor(public router: ActivatedRoute, public service : BlogcontrolService) { 
    router.paramMap.subscribe(res => {{
      let title = res['params'].id.split('@')[1].split('-').join(' ')
      this.service.getBlogByTitle(title).toPromise()
      .then(res => {
        this.content = res['data']
        console.log(this.content)
      }).catch(err => {
        console.log(err)
      })
    }})
  }

  ngOnInit() {
  }

}
