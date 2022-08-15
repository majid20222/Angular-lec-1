import { Component, OnInit } from '@angular/core';
import { Todoitem } from '../models/todo-item';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
})
export class ToDoComponent implements OnInit {
  todos: Todoitem[];
  constructor() {
    this.todos = [
      { taskName: 'Learning Angular', taskStatus: true },
      { taskName: 'Learning React', taskStatus: true },
    ];
  }

  ngOnInit(): void {}
}
