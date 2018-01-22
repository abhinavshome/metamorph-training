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
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    let movieId = +this.route.snapshot.paramMap.get('movieId');
    this.movie = DUMMY_MOVIES.find(m => m.id == movieId);
  }

}
