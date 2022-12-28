import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) { }

  
  // createAndStorePost(image:ImageData){

  //   console.log(image)
  //   return this.http.post<{name:string}>('https://photoapp-736be-default-rtdb.firebaseio.com/posts.json',JSON.stringify(image));

  // }

  getPosts(){
    return this.http.get<{[key:string]: ImageData}>('https://photoapp-736be-default-rtdb.firebaseio.com/posts.json')
  }
}