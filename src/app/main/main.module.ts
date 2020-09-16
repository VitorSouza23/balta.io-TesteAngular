import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { TodosListModule } from '../todos-list/todos-list.module';
import { TodosUpsertModule } from '../todos-upsert/todos-upsert.module';
import { TodosServiceService } from '../services/todos-service.service';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    TodosListModule,
    TodosUpsertModule
  ],
  exports: [
    MainComponent
  ],
  providers: [
    TodosServiceService
  ]
})
export class MainModule { }
