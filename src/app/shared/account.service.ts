import {Injectable} from '@angular/core';
import {Account} from "./Account";

@Injectable()
export class AccountService {

  myAccount: Account={
    name: "John Doe",
    email: "John@gmail.com",
    account: "john",
    password: "john"
  };

  constructor() {
  }

  isLoggedIn(): boolean {
    return true;
  }
}
