import { MovieService } from './../movie.service';
import { DUMMY_MOVIES } from './../models/dummyMovies';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Movie } from '../models/movie';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  selectedMovie: Movie;
  constructor(
    private movieService: MovieService,
    private http: Http
  ) {

  }

  selectMovie(movie) {
    this.selectedMovie = movie;
    this.movieService.setSelectedMovieId(movie.id);
  }

  ngOnInit() {
    this.movieService
      .getMovies()
      .subscribe(res => {
        this.movies = res.json();
        let selectedMovieId = this.movieService.getSelectedMovieId();
        this.selectedMovie = this.movies.find(m => m.id == selectedMovieId);
      });
  }
}
