import { PlayComponent } from './play/play.component';
import { Route } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MovieListComponent } from './movie-list/movie-list.component';


export const routes : Route[] = [
  { 
    path: 'movies', 
    component: MovieListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'play/:movieId',
    component: PlayComponent
  },
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  }
]