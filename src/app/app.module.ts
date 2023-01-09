import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { RatingComponent } from './rating/rating.component';
import { AboutmeContactComponent } from './aboutme-contact/aboutme-contact.component';
import { ImageComponent } from './image/image.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RatingComponent,
    AboutmeContactComponent,
    ImageComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },

      { path: 'rating', component: RatingComponent },
      { path: 'aboutMe|contact', component: AboutmeContactComponent },
      { path: 'addimage', component: ImageComponent },
      {path: 'auth', component: AuthComponent}
    ]),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
