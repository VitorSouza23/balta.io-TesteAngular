import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/models/todo.model';
import ViewMode from '../common/ViewMode';
import { TodosServiceService } from '../services/todos-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public viewMode = ViewMode;
  public mode: ViewMode = ViewMode.List;
  public todos: Todo[] = [];
  public title: String = "Minhas tarefas";

  constructor(private todoService: TodosServiceService) {
  }

  ngOnInit(): void {
    this.load();
  }

  private load(){
    this.todos = this.todoService.load();
  }

  changeMode(mode: ViewMode){
    this.mode = mode;
  }
}
