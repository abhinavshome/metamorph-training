import { MovieService } from './../movie.service';
import { Movie } from './../models/movie';
import { DUMMY_MOVIES } from './../models/dummyMovies';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  movie: Movie;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    let movieId = +this.route.snapshot.paramMap.get('movieId');
    this.movieService
      .getMovie(movieId)
      .subscribe(res => this.movie = res.json())
  }

}
