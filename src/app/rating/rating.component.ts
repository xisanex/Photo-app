import { Component, DoCheck } from '@angular/core';
import { AddImageFormService } from '../image/add-image-form.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements DoCheck {
  stars: number[] = [1, 2, 3, 4, 5];

  constructor(public addImageFormService: AddImageFormService) {
    console.log(this.addImageFormService.images);
  }

  ngDoCheck() {}

  countStar(star: number, i: number) {
    console.log(this.addImageFormService.images);
    console.log(i);
    this.addImageFormService.images[i].rating = star;
  }

  onSortByTopRated() {
    this.addImageFormService.images.sort((a, b) => b.rating - a.rating);
  }

  onSortByDate() {
    this.addImageFormService.images.sort(
      (a, b) => b.date.getTime() - a.date.getTime()
    );
  }
}
