import { MovieService } from './movie.service';
import { routes } from './routes';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieListItemComponent } from './movie-list-item/movie-list-item.component';
import { SelectedMovieComponent } from './selected-movie/selected-movie.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlayComponent } from './play/play.component';
import { MovieAddFormComponent } from './movie-add-form/movie-add-form.component';
import { TitlecasePipe } from './titlecase.pipe';
import { HighlightDirective } from './highlight.directive';



@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieListItemComponent,
    SelectedMovieComponent,
    AboutComponent,
    NavbarComponent,
    PlayComponent,
    MovieAddFormComponent,
    TitlecasePipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
