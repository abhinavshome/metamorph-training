import { MovieService } from './../movie.service';
import { DUMMY_MOVIES } from './../models/dummyMovies';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  selectedMovie: Movie;
  constructor(private movieService: MovieService) { 

  }

  selectMovie(movie) {
    this.selectedMovie = movie;
    this.movieService.setSelectedMovieId(movie.id);
  }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
    this.selectedMovie = this.movieService.getSelectedMovie();
  }

}
