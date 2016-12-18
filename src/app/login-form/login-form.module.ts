import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {LoginFormComponent} from "./login-form.component";
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [
    FormsModule,
    HttpModule
  ],
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent]
})
export class LoginFormModule {
}
