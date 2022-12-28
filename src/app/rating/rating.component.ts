import { Component, DoCheck, OnInit } from '@angular/core';
import { AddImageFormService } from '../image/add-image-form.service';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements DoCheck, OnInit {
  stars: number[] = [1, 2, 3, 4, 5];

  constructor(public addImageFormService: AddImageFormService,
    private postsService: PostsService) {
    // console.log(this.addImageFormService.images);
  }

  ngDoCheck() {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(data=> console.log(data))
  }

  countStar(star: number, i: number) {
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
