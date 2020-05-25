import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  editorStyle = {
    height: '200px',
    border: '1px solid transparent'
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

  change(e:any){
    // console.log(e)
  }

  submit(){
    this.textObject = this.text
    console.log(this.text)
  }

  ngOnInit() {  
  }

}
