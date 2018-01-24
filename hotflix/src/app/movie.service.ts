import { DUMMY_MOVIES } from './models/dummyMovies';
import { Movie } from './models/movie';
import { Injectable } from '@angular/core';

@Injectable()
export class MovieService {
  private movies: Movie[];
  private selectedMovieId: number;

  constructor() { 
    this.movies = DUMMY_MOVIES;
  }

  getMovies() {
    return this.movies;
  }

  getMovie(movieId : number) {
    return this.movies.find(m => m.id == movieId)
  }

  increaseWatchCount(movie: Movie) {
    movie.numOfTimesWatched = movie.numOfTimesWatched || 0;
    movie.numOfTimesWatched++;
  }

  getSelectedMovie() {
    return this.getMovie(this.selectedMovieId);
  }

  setSelectedMovieId(movieId: number) {
    this.selectedMovieId = movieId;
  }

  addMovie(movie:Movie) {
    this.movies.push(movie);
  }
}
