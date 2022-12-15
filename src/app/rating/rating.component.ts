import { Component, DoCheck } from '@angular/core';
import { AddImageFormService } from '../image/add-image-form.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements DoCheck{
  title: string | undefined;
  author: string | undefined;
  photo: string | undefined;
  description: string | undefined;
  rating: any;


  stars: number[] = [1,2,3,4,5];
  selectedValue:number = 0;

  images = this.addImageFormService.images;
  
  constructor(private addImageFormService: AddImageFormService) {
    this.images.rating = '0'
  }
  
  onAddImage() {
    this.title = this.addImageFormService.images[0].photoTitle;
    this.author = this.addImageFormService.images[0].author;
    this.photo = this.addImageFormService.images[0].imagePath;
    this.description = this.addImageFormService.images[0].description;
    this.rating = this.addImageFormService.images[0].rating;
    

  
  }

  ngDoCheck(){
  //   this.selectedValue = this.addImageFormService.images[0].rating;
    
  //  console.log(this.addImageFormService.images)
  }


  countStar(star:number){
    this.selectedValue = star;
    this.rating = this.selectedValue;
   console.log(this.rating)
   console.log(this.addImageFormService.images)
  }
}
