import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
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


  @ViewChildren('ref') buttons!: QueryList<any>;

  constructor(private addImageFormService: AddImageFormService) {}
  images = this.addImageFormService.images;
  onAddImage() {
    this.title = this.addImageFormService.images[0].photoTitle;
    this.author = this.addImageFormService.images[0].author;
    this.photo = this.addImageFormService.images[0].imagePath;
  }

  onAddClass(event: any) {
    const btnId: string = (event.target as Element).id;
    console.log( btnId)
    this.buttons.forEach((button: ElementRef)=>{
      console.log( button.nativeElement.id)
      if(button.nativeElement.id === btnId) {
          event.target.classList.toggle('fa-solid')
      }})
  }
}
