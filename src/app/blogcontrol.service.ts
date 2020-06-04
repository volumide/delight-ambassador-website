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

  url = "http://localhost/delight-backend/public/api/"
  
  constructor(public http: HttpClient) { }

  //urlshortner
  shortUrl(prefix: string, index:any = ''){
    return this.url + prefix + index
  }

  public headers(){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      })   
    }
    return header
  }

  // blog api consumation
  createBlog(data:any){
    let header = this.headers()
    return this.http.post(`${this.url}create/blog`, data )
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

  getBlogByTitle(title:any){
    return this.http.get(this.shortUrl('blog/by/', title))
  }

  deleteBlogById(id:any){
    return this.http.delete(this.shortUrl('delete/blog/', id))
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

  getAllEvents(){
    return this.http.get(this.shortUrl('all/event'))
  }

  getEventById(id:any){
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

  // count 
  countAll(){
    return this.http.get(this.shortUrl('count'))
  }

  //uploaad image document
  uploadImage(data:object){
    return this.http.post(this.shortUrl('upload/image'), data)
  }

  //gallery
  uploadGalleryImage(data:object){
    return this.http.post(`${this.url}upload/gallery/image`, data)
  }

  getAllImages(){
    return this.http.get(this.shortUrl('all/images'))
  }

  getImageById(id:any){
    return this.http.get(this.shortUrl('image/', id))
  }

  deleteImageById(id:any){
    return this.http.delete(this.shortUrl('delete/image/', id))
  }
}

