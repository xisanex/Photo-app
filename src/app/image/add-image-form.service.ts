import { Injectable } from '@angular/core';

export interface ImageData {
  photoTitle: string;
  author: string;
  imagePath: string;
  description?: string;
  rating: number;
  date: Date;
}

@Injectable({
  providedIn: 'root',
})
export class AddImageFormService {
  public images: ImageData[] = [
    {
      photoTitle: 'Kitku',
      author: 'kulka',
      imagePath:
        'https://www.fitmin.pl/data/original/filemanager/Nowo%C5%9Bci%20PL/czy-koty-maja-sny.jpg',
      date: new Date(),
      rating: 0,
    },
    {
      photoTitle: 'Piotrk',
      author: 'słodki jak poziomki',
      imagePath:
        'https://www.fitmin.pl/data/original/filemanager/Nowo%C5%9Bci%20PL/czy-koty-maja-sny.jpg',
      date: new Date(),
      rating: 0,
    },
  ];
}
