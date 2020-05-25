import { Component, OnInit, HostListener } from '@angular/core';
// import {AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Values{ blog: string, title: string}

@Component({

  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public isShow:boolean
  topPosToStartShowing = 200

  // itemCollection: AngularFirestoreCollection<Values>

  constructor() {
      // this.itemCollection = afs.collection<Values>('Blog')

      // this.itemCollection.valueChanges().subscribe( (data) => {
      //   console.log(data)
      // });

      // this.itemCollection.doc<Values>('myname').update({blog: "this is working"}).then( () => console.log('success')).catch(err => console.log(err))
      // this.itemCollection.doc('new').set({blog: "hello", title: "<p> Hello there </p>"}).then(()=> {
      //   console.log("successful")
      // }).catch((err)=> console.log(err))

      // this.itemCollection.add({blog: "my first", title:"another blog"}).then(()=>{
      //   console.log('successful')
      // }).catch(err => console.log(err))

      // console.log(this.items)
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
