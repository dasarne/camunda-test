import { Injectable } from '@angular/core';
import { Task } from '.';
import {HttpModule, Http, Response, Headers, RequestOptions,RequestMethod} from '@angular/http';
import {Observable} from "rxjs";
import {Subscription} from "rxjs/Subscription"
import 'rxjs/add/operator/map';
import {AccountService} from "./account.service";

@Injectable()
export class TaskService {
  myTasks:Task[] =
  [{
    "id": "78756ef9-c2c0-11e6-b821-902b3431f5b6",
    "name": "Approve Loan",
    "assignee": "john",
    "created": "2016-12-15T13:17:39",
    "due": null,
    "followUp": null,
    "delegationState": null,
    "description": null,
    "executionId": "7872fdf1-c2c0-11e6-b821-902b3431f5b6",
    "owner": null,
    "parentTaskId": null,
    "priority": 50,
    "processDefinitionId": "approve-loan:1:f62310f7-c14b-11e6-859b-902b3431f5b6",
    "processInstanceId": "7872fdf1-c2c0-11e6-b821-902b3431f5b6",
    "taskDefinitionKey": "UserTask_11fud4o",
    "caseExecutionId": null,
    "caseInstanceId": null,
    "caseDefinitionId": null,
    "suspended": false,
    "formKey": "embedded:app:forms/approve-loan.html",
    "tenantId": null
  }, {
    "id": "fb530a57-c14b-11e6-859b-902b3431f5b6",
    "name": "Approve Invoice",
    "assignee": null,
    "created": "2016-12-13T16:51:16",
    "due": "2016-12-20T16:51:16",
    "followUp": null,
    "delegationState": null,
    "description": "Approve the invoice (or not).",
    "executionId": "fb4882e8-c14b-11e6-859b-902b3431f5b6",
    "owner": null,
    "parentTaskId": null,
    "priority": 50,
    "processDefinitionId": "invoice:1:fa286c9c-c14b-11e6-859b-902b3431f5b6",
    "processInstanceId": "fb4882e8-c14b-11e6-859b-902b3431f5b6",
    "taskDefinitionKey": "approveInvoice",
    "caseExecutionId": null,
    "caseInstanceId": null,
    "caseDefinitionId": null,
    "suspended": false,
    "formKey": "embedded:app:forms/approve-invoice.html",
    "tenantId": null
  }, {
    "id": "fbfc6958-c14b-11e6-859b-902b3431f5b6",
    "name": "Assign Reviewer",
    "assignee": "demo",
    "created": "2016-12-13T16:51:17",
    "due": null,
    "followUp": null,
    "delegationState": null,
    "description": null,
    "executionId": null,
    "owner": null,
    "parentTaskId": null,
    "priority": 50,
    "processDefinitionId": null,
    "processInstanceId": null,
    "taskDefinitionKey": "PlanItem_1",
    "caseExecutionId": "fbfc1b35-c14b-11e6-859b-902b3431f5b6",
    "caseInstanceId": "fbfa4667-c14b-11e6-859b-902b3431f5b6",
    "caseDefinitionId": "ReviewInvoiceCase:2:fa674a68-c14b-11e6-859b-902b3431f5b6",
    "suspended": false,
    "formKey": "embedded:app:forms/assign-reviewer.html",
    "tenantId": null
  }, {
    "id": "fc1102f3-c14b-11e6-859b-902b3431f5b6",
    "name": "Approve Invoice",
    "assignee": null,
    "created": "2016-12-13T16:51:17",
    "due": "2016-12-20T16:51:17",
    "followUp": null,
    "delegationState": null,
    "description": "Approve the invoice (or not).",
    "executionId": "fc106694-c14b-11e6-859b-902b3431f5b6",
    "owner": null,
    "parentTaskId": null,
    "priority": 50,
    "processDefinitionId": "invoice:2:fa63ef06-c14b-11e6-859b-902b3431f5b6",
    "processInstanceId": "fc106694-c14b-11e6-859b-902b3431f5b6",
    "taskDefinitionKey": "approveInvoice",
    "caseExecutionId": null,
    "caseInstanceId": null,
    "caseDefinitionId": null,
    "suspended": false,
    "formKey": "embedded:app:forms/approve-invoice.html",
    "tenantId": null
  }, {
    "id": "fc5addd3-c14b-11e6-859b-902b3431f5b6",
    "name": "Assign Reviewer",
    "assignee": "demo",
    "created": "2016-12-13T16:51:18",
    "due": null,
    "followUp": null,
    "delegationState": null,
    "description": null,
    "executionId": null,
    "owner": null,
    "parentTaskId": null,
    "priority": 50,
    "processDefinitionId": null,
    "processInstanceId": null,
    "taskDefinitionKey": "PlanItem_1",
    "caseExecutionId": "fc5ab6c0-c14b-11e6-859b-902b3431f5b6",
    "caseInstanceId": "fc5a6892-c14b-11e6-859b-902b3431f5b6",
    "caseDefinitionId": "ReviewInvoiceCase:2:fa674a68-c14b-11e6-859b-902b3431f5b6",
    "suspended": false,
    "formKey": "embedded:app:forms/assign-reviewer.html",
    "tenantId": null
  }]

  //http-Client injizieren
  constructor(
    private http:Http,
    private account:AccountService
  ) { }

  getTasks(){
    let headers = new Headers();
    this.createAuthorizationHeader(headers);

    let options = new RequestOptions({ headers: headers });

    return this.http
      .get(
        "http://localhost:8080/engine-rest/Task",
        options
      )
      .map(response => response.json()).subscribe(
        (tasks:Task[]) => this.myTasks=tasks,
        (err) => console.log(err),
        () => console.log(this.myTasks)
      );
  }
  ngOnInit() {
  }

  createAuthorizationHeader(headers: Headers) {
    let model = this.account.myAccount;
    headers.append('Authorization', 'Basic ' +
      btoa(`${model.account}:${model.password}`));
  }


}
