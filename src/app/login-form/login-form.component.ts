import { Component, OnInit } from '@angular/core';
import {AccountService} from "../shared/account.service";
import {Account} from "../shared/Account";
import {Router} from "@angular/router";

@Component({
  selector: 'ct-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public model:Account;

  onSubmit() {
    this.router.navigate(['/tasks']);
  }

  constructor(
    private account: AccountService,
    private router: Router
  ){
    this.model=account.myAccount;
  }

  ngOnInit(): void {
  }

}
