import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogcontrolService } from '../blogcontrol.service';
import { error } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  code:string
  message: string =''
  error:boolean = false;
  loading:boolean = false
  key = localStorage.getItem('delightAccessKey');
  constructor( public route: Router, public servicce: BlogcontrolService ) {
    if(this.key){
      this.route.navigate(['admin'], {replaceUrl: true})
    }
   }


  ngOnInit() {
  }

  login(){
    if (this.code == '' || typeof this.code === 'undefined') {
      this.message = 'login code is empty'
      this.error = true
      return
    }

    this.servicce.login(this.code).subscribe(res=>{
      console.log(res)
      if(res['data']){
        localStorage.setItem('delightAccessKey', res['data'].loginCode)
        this.error = false
        this.route.navigate(['admin'], {replaceUrl: true})
        return
      }
      this.message = res['message']
      this.error = true
    }, err =>{
      // this.message = err
      console.log(err)
    })
  }

}
