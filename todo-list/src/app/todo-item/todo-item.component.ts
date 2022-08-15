import { Component, Input, OnInit } from '@angular/core';
import { Todoitem } from '../models/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() tod!: Todoitem;
  constructor() {}

  ngOnInit(): void {}
}
