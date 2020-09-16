import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.model';
import ViewMode from '../common/ViewMode';
import { TodosServiceService } from '../services/todos-service.service';

@Component({
  selector: 'app-todos-upsert',
  templateUrl: './todos-upsert.component.html',
  styleUrls: ['./todos-upsert.component.css']
})
export class TodosUpsertComponent implements OnInit {
  @Input() todos: Todo[];
  @Output() viewModeChange = new EventEmitter<ViewMode>();
  public form: FormGroup;

  constructor(private fb: FormBuilder, private todosService: TodosServiceService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });
  }

  add() {
    const title = this.form.controls['title'].value;
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, title, false));
    this.todosService.save(this.todos);
    this.clear();
    this.viewModeChange.emit(ViewMode.List);
  }

  clear() {
    this.form.reset();
  }

}
