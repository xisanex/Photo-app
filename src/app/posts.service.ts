import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) { }

  createAndStorePost(){
    // this.http.post<{name:string}>('https://photoapp-736be-default-rtdb.firebaseio.com/posts.json', image).subscribe(responseData =>(console.log(responseData)));
  
  }
}