import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ImageData } from './image/add-image-form.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) { }

  createAndStorePost(image:ImageData){
    return this.http.post<{name:string}>('https://photoapp-736be-default-rtdb.firebaseio.com/posts.json', image)
    .subscribe(responseData =>{console.log(responseData)});

  }

  getPosts(){
    return this.http
    .get<{[key:string]: ImageData}>('https://photoapp-736be-default-rtdb.firebaseio.com/posts.json')
    .pipe(
      map(responseData=>{
        console.log(responseData)
       const postsArray: ImageData[] =[];
        for (const key in responseData){
         if(responseData.hasOwnProperty(key)){
          postsArray.push({...responseData[key], id:key})
        }
      }
      console.log(postsArray)
      return postsArray
    })
    );
  }

  deletePhoto(){
    return this.http.delete('https://photoapp-736be-default-rtdb.firebaseio.com/posts.json');
  }
}