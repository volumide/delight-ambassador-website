import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-imagecard',
  templateUrl: './imagecard.component.html',
  styleUrls: ['./imagecard.component.scss']
})
export class ImagecardComponent implements OnInit {

  @Input('image') image: any
  constructor() { }

  ngOnInit() {
  }

}
