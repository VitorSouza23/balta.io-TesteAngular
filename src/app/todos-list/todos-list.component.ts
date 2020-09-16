import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/models/todo.model';
import { TodosServiceService } from '../services/todos-service.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
  @Input() todos: Todo[];

  constructor(private todoService: TodosServiceService) { }

  ngOnInit(): void {
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
      this.todoService.save(this.todos);
    }
  }

  markAsDone(todo: Todo) {
    todo.done = true;
    this.todoService.save(this.todos);
  }

  markAsUndone(todo: Todo) {
    todo.done = false;
    this.todoService.save(this.todos);
  }
}
