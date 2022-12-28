import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { PostsService } from '../posts.service';
import { AddImageFormService, ImageData } from './add-image-form.service';
interface FormGroupType {
  photoTitle: FormControl<string | null>;
  author: FormControl<string | null>;
  description: FormControl<string | null>;
  imagePath: FormControl<string | null>;
}

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {

  loadedPosts: ImageData[] = [];

  addImageForm: FormGroup<FormGroupType> = new FormGroup<FormGroupType>({
    photoTitle: new FormControl(null, [Validators.required,Validators.pattern('[a-zA-Z ]*')]),
    author: new FormControl(null, Validators.required),
    description: new FormControl(null),
    imagePath: new FormControl(null, [Validators.required, Validators.pattern('https?:\/\/.*\.(?:png|jpg)')]),
  });

  constructor(
    private addImageFormService: AddImageFormService,
    private router: Router,
    private route: ActivatedRoute,
    private http:HttpClient,
    private postsService:PostsService
  ) {}

  

  onSubmit() {
    const image: ImageData = {
      ...(this.addImageForm.value as ImageData),
      rating: 0,
      date: new Date(),
    };
    console.log(image)
    this.addImageFormService.images.push(image);
    // this.postsService.createAndStorePost(image).subscribe(data=>console.log(data))
    this.http.post<{name:string}>('https://photoapp-736be-default-rtdb.firebaseio.com/posts.json', image).subscribe(responseData =>(console.log(responseData)));
    this.addImageForm.reset();
    // this.router.navigate(['/rating'], { relativeTo: this.route });
  }

  // onFetchPosts(){
  //   this.fetchPosts();
  // }

  fetchPosts(){
    this.http.get<{[key:string]: ImageData}>('https://photoapp-736be-default-rtdb.firebaseio.com/posts.json')
    // .pipe(map(responseData=>{
    //   const postsArray = [];
    //   for (const key in responseData){
    //     if (responseData.hasOwnProperty(key)){
    //       postsArray.push({...responseData[key], id:key})

    //     }
    //   }
    //   return postsArray;
    // }))
    .subscribe(posts =>{
      console.log(posts)
    // this.loadedPosts = posts
  })
  }
  ngOnInit() {
    // this.fetchPosts();
  }
}