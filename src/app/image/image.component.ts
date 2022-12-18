import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  addImageForm: FormGroup<FormGroupType> = new FormGroup<FormGroupType>({
    photoTitle: new FormControl(null, Validators.required),
    author: new FormControl(null, Validators.required),
    description: new FormControl(null),
    imagePath: new FormControl(null, Validators.required),
  });

  constructor(
    private addImageFormService: AddImageFormService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  onSubmit() {
    const image: ImageData = {
      ...(this.addImageForm.value as ImageData),
      rating: 0,
      date: new Date(),
    };
    this.addImageFormService.images.push(image);
    this.addImageForm.reset();
    this.router.navigate(['/rating'], { relativeTo: this.route });
  }
}
