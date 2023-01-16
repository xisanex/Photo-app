import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutmeContactComponent } from './aboutme-contact/aboutme-contact.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { ImageComponent } from './image/image.component';
import { RatingComponent } from './rating/rating.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rating', component: RatingComponent },
  { path: 'aboutMe|contact', component: AboutmeContactComponent },
  { path: 'addimage', component: ImageComponent },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
