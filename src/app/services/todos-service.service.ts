import { Injectable } from '@angular/core';
import { Todo } from 'src/models/todo.model';
import LocalStorageKeys from '../common/LocalStorageKeys';

@Injectable({
  providedIn: 'root'
})
export class TodosServiceService {
  constructor() { }

  save(todos: Todo[]) {
    const data = JSON.stringify(todos);
    localStorage.setItem(LocalStorageKeys.Todos, data);
  }

  load(): Todo[] {
    const data = localStorage.getItem(LocalStorageKeys.Todos);
    return JSON.parse(data) ?? [];
  }
  
}
