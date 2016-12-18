import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../shared/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ct-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(
    private myAccount: AccountService,
    private router: Router
  ) {
    //If not logged in redirect to login-from
    if(!myAccount.isLoggedIn()){
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
  }

}
