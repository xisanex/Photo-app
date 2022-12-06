import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddImageFormService, ImageData } from './add-image-form.service';
interface FormGroupType {
  photoTitle: FormControl<string | null>;
  author: FormControl<string | null>;
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
    imagePath: new FormControl(null, Validators.required),
  });

  constructor(private addImageFormService: AddImageFormService) {}

  ngOnInit() {}

  onSubmit() {
    this.addImageFormService.images.push(this.addImageForm.value as ImageData);
    this.addImageForm.reset();

    console.log(this.addImageFormService.images);
  }
}
