import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

//Imports of components
import {TaskListComponent} from "./task-list/task-list.component";
import {TaskDetailComponent} from "./task-detail/task-detail.component";


//Build map of routes
export const routes: Routes = [{
  path: 'tasks',
  children: [{
    path: '',
    component: TaskListComponent,
  },{
    path: ':id',
    component: TaskDetailComponent
  }]
}];

export const routing = RouterModule.forChild(routes);
