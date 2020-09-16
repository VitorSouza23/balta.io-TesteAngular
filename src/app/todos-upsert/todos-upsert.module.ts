import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosUpsertComponent } from './todos-upsert.component';
import { TodosServiceService } from '../services/todos-service.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodosUpsertComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TodosUpsertComponent
  ],
  providers: [
    TodosServiceService
  ]
})
export class TodosUpsertModule { }
