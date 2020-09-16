import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosListComponent } from './todos-list.component';
import { TodosServiceService } from '../services/todos-service.service';

@NgModule({
  declarations: [TodosListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TodosListComponent
  ],
  providers: [
    TodosServiceService
  ]
})
export class TodosListModule { }
