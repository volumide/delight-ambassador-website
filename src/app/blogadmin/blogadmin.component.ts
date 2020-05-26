import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogadmin',
  templateUrl: './blogadmin.component.html',
  styleUrls: ['./blogadmin.component.scss']
})
export class BlogadminComponent implements OnInit {

  constructor() { }

  editorStyle = {
    height: 'calc(100vh - 200px)',
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
  ngOnInit() {
  }

}
