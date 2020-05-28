import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private httpClient: HttpClient) { }
  
}
@Injectable({
  providedIn: 'root'
})
export class BlogcontrolService {

  url = "http://127.0.0.1:8000/"
  
  constructor(public http: HttpClient) { }

  //urlshortner
  shortUrl(prefix: string, index:any = ''){
    return this.url + prefix + index
  }

  // blog api consumation
  createBlog(data:any){
    return this.http.post(`${this.url}create/blog`, data)
  }

  updateBlog(data: any, id :any){
    return this.http.put(this.shortUrl('update/blog/', id), data)
  }

  getAllBlog(){
    return this.http.get(this.shortUrl('all/blog'))
  }

  getBlogById(id:any){
    return this.http.get(this.shortUrl('blog/', id))
  }

  deleteBlogById(id:any){
    return this.http.delete(this.shortUrl('delete/blog', id))
  }

  //Leader api consumation
  createLeaderProfile(data:any){
    return this.http.post(`${this.url}create/leader/profile`, data)
  }

  updateLeaderProfile(data: any, id :any){
    return this.http.put(this.shortUrl('update/Leader/profile/', id), data)
  }

  getAllLeaderProfile(){
    return this.http.get(this.shortUrl('get/leaders'))
  }

  getLeaderProfileById(id:any){
    return this.http.get(this.shortUrl('get/leader/profile/', id))
  }

  deleteLeaderProfileById(id:any){
    return this.http.delete(this.shortUrl('remove/leader/profile/', id))
  }

  //Event api consumation
  createEvent(data:any){
    return this.http.post(`${this.url}create/event`, data)
  }

  updateEvent(data: any, id :any){
    return this.http.put(this.shortUrl('update/event', id), data)
  }

  getAllLEvents(){
    return this.http.get(this.shortUrl('all/event'))
  }

  getEventyId(id:any){
    return this.http.get(this.shortUrl('event/', id))
  }

  deleteEventById(id:any){
    return this.http.delete(this.shortUrl('remove/event/', id))
  }

  //Comment api consumation
  postComment(data:any){
    return this.http.post(`${this.url}create/comment`, data)
  }

  getAllComment(){
    return this.http.get(this.shortUrl('all/comment'))
  }

  deleteCommentById(id:any){
    return this.http.delete(this.shortUrl('remove/comment/', id))
  }

  //id is based on the blog id
  getCommentyId(id:any){
    return this.http.get(this.shortUrl('get/comment/', id))
  }

   //Email api consumption
  subscribemMail(data:any){
    return this.http.post(`${this.url}subscribe/to/mailing/list`, data)
  }

  sendNewsLetter(data:any){
    return this.http.post(`${this.url}send/mail/to/subscribers`, data)
  }

  unsubscribeMail(){
    return this.http.delete(this.shortUrl('unsubscribe/from/mailing/list'))
  }

}
