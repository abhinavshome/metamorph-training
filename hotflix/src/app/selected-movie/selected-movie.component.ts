import { Movie } from './../models/movie';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'selected-movie',
  templateUrl: './selected-movie.component.html',
  styleUrls: ['./selected-movie.component.css']
})
export class SelectedMovieComponent implements OnInit {
  @Input() movie: Movie;
  constructor() { }

  ngOnInit() {
  }

}
