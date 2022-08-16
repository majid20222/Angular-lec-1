import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todoitem } from '../models/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() tod!: Todoitem;
  @Output() todoDelete: EventEmitter<Todoitem> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onDeleteClick(tod: Todoitem) {
    this.todoDelete.emit(tod);
    console.log('Delete has been hit.');
  }
}
