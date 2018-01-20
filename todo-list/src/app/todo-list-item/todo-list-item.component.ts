import { Todo } from './../models/todo';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() onStatusBtnClick : EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  handleStatusBtnClick() {
    this.onStatusBtnClick.emit(this.todo);
  }

}
