import { Movie } from './../models/movie';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {
  @Input() movie: Movie;
  @Input() selected: boolean;
  @Output() onMovieSelect = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
    
  }

  handleClick(movie) {
    this.onMovieSelect.emit(movie);
  }

}
