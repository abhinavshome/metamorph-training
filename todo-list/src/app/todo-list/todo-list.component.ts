import { TODOS } from './../models/dummyTodos';
import { Todo } from './../models/todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  totalDone: number;
  totalInProgress: number;

  constructor() { }

  ngOnInit() {
    this.todos = TODOS;
    this.totalDone = this.todos.filter(t => t.done).length;
    this.totalInProgress = this.todos.filter(t => !t.done).length;
  }

  toggle(todo) {
    todo.done = !todo.done;
    this.updateCounters();
  }

  private updateCounters() {
    this.totalDone = this.todos.filter(t => t.done).length;
    this.totalInProgress = this.todos.filter(t => !t.done).length;
  }

}
