import { Component } from '@angular/core';
import { AddImageFormService } from '../image/add-image-form.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent {
  title: string | undefined;
  author: string | undefined;
  photo: string | undefined;


  stars: number[] = [1,2,3,4,5];
  selectedValue:number = 0;

  constructor(private addImageFormService: AddImageFormService) {}
  images = this.addImageFormService.images;
  onAddImage() {
    this.title = this.addImageFormService.images[0].photoTitle;
    this.author = this.addImageFormService.images[0].author;
    this.photo = this.addImageFormService.images[0].imagePath;
  }

  countStar(star:number){
    this.selectedValue = star;
  }
}
