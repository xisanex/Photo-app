import { Injectable } from '@angular/core';

export interface ImageData {
  photoTitle: string;
  author: string;
  imagePath: string;
}

@Injectable({
  providedIn: 'root',
})
export class AddImageFormService {
  public images: ImageData[] = [];
}
