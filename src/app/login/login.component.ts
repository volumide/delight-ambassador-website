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

  writter:boolean = false
  admin: boolean = false
  writeCode:string
  adminCode:string
  message: string =''
  error:boolean = false;
  loading:boolean = false
  key = localStorage.getItem('delightAccessKey');
  status = localStorage.getItem('delightStatus');
  constructor( public route: Router, public servicce: BlogcontrolService ) {
    if(this.key){
      this.route.navigate(['admin'], {replaceUrl: true})
    }
   }


  ngOnInit() {
  }

  showAdmin(){
    this.admin = true
    this.writter = false
  }

  showWritter(){
    this.admin = false
    this.writter = true
  }

  login(){
    if (this.writeCode == '' || typeof this.writeCode === 'undefined') {
      this.message = 'login code is empty'
      this.error = true
      return
    }

    this.servicce.login(this.writeCode).subscribe(res=>{
      console.log(res)
      if(res['data']){
        localStorage.setItem('delightAccessKey', res['data'].loginCode)
        localStorage.setItem('delightAccessWritterKey', res['data'].writeAccess)
        localStorage.removeItem('delightStatus')

        this.error = false
        this.route.navigate(['admin'], {replaceUrl: true})
        return
      }
      this.message = res['message']
      this.error = true
    }, err =>{
      console.log(err)
    })
  }

  adminLogin(){
    if (this.adminCode == '' || typeof this.adminCode === 'undefined') {
      this.message = 'login code is empty'
      this.error = true
      return
    }

    this.servicce.admin(this.adminCode).subscribe(res =>{
      if(res['data']){
        localStorage.setItem('delightAccessKey', res['data'].admin)
        localStorage.setItem('delightAccessWritterKey', 'no')
        localStorage.setItem('delightStatus', 'admin' )

        this.error = false
        this.route.navigate(['admin'], {replaceUrl: true})
        console.log(res)
        return
      }

      this.message = res['message']
      this.error = true
    }, err => {
      console.log(err)
    })
  }
// !peo)idk,Sk:kldk
}
