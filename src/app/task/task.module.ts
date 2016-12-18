import { NgModule } from '@angular/core';

import { ModuleWithProviders} from '@angular/core';

import { CommonModule } from '@angular/common';
import {routing} from "./task.routing";
import {TaskListComponent} from "./task-list/task-list.component";
import {TaskDetailComponent} from "./task-detail/task-detail.component";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    TaskListComponent,
    TaskDetailComponent,
   ]
})
export class TaskModule {

  constructor(){

  }

}
