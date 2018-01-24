import { MovieService } from './../movie.service';
import { Movie } from './../models/movie';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'movie-add-form',
  templateUrl: './movie-add-form.component.html',
  styleUrls: ['./movie-add-form.component.css']
})
export class MovieAddFormComponent implements OnInit {
  newMovie: Movie;
  constructor(
    private movieService: MovieService,
    private router: Router
  ) { }

  ngOnInit() {
    this.newMovie = new Movie();
  }

  addMovie() {
    this.movieService
      .addMovie(this.newMovie)
      .subscribe(res => this.router.navigate(['/movies']));
    ;
  }

}
