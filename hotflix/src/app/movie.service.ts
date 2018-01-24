import { Http, Headers } from '@angular/http';
import { DUMMY_MOVIES } from './models/dummyMovies';
import { Movie } from './models/movie';
import { Injectable } from '@angular/core';

@Injectable()
export class MovieService {
  private movies: Movie[];
  private selectedMovieId: number;
  private url = 'http://localhost:3000/movies';

  constructor(private http: Http) { 
    this.selectedMovieId = 1;
  }

  getMovies() {
    return this.http.get(this.url);
  }

  getMovie(movieId : number) {
    return this.http.get(this.url + '/' + movieId);
  }

  increaseWatchCount(movie: Movie) {
    movie.numOfTimesWatched = movie.numOfTimesWatched || 0;
    movie.numOfTimesWatched++;
  }

  getSelectedMovieId() {
    return this.selectedMovieId;
  }

  setSelectedMovieId(movieId: number) {
    this.selectedMovieId = movieId;
  }

  addMovie(movie:Movie) {
    let options = {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post(this.url, movie, options);
  }
}
