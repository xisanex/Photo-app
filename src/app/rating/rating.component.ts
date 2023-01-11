import { Component, DoCheck, OnInit } from '@angular/core';
import { AddImageFormService } from '../image/add-image-form.service';
import { PostsService } from '../posts.service';
import { ImageData } from '../image/add-image-form.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements DoCheck, OnInit {
  stars: number[] = [1, 2, 3, 4, 5];
  loadedPosts: ImageData[] = [];
  isFetching = false;
  error = null;

  constructor(
    public addImageFormService: AddImageFormService,
    private postsService: PostsService
  ) {}

  ngDoCheck() {}

  ngOnInit(): void {
    this.onFetchPosts();
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postsService.getPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    });
  }

  onClearPhoto() {
    this.postsService.deletePhoto().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  countStar(star: number, i: number) {
    console.log(star);
    this.loadedPosts[i].rating = star;
  }

  onSortByTopRated() {
    this.loadedPosts.sort((a, b) => b.rating - a.rating);
  }

  onSortByDate() {
    this.loadedPosts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }
}
