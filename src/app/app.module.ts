import { BrowserModule } from '@angular/platform-browser';
import {ModuleWithProviders} from "@angular/core";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginFormModule } from "./login-form/login-form.module";

import {routing} from "./app.routing";

import {AccountService} from "./shared/account.service";
import {TaskService} from "./shared/task.service";
import {TaskModule} from "./task/task.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginFormModule,
    TaskModule,
    routing
  ],
  providers: [
    TaskService,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
