/**
 * Author: Mary Kuchumova
 * Date: 26 Jun 2016
 * Time: 16:08
 */

import { Component } from "@angular/core";
import { LoggedInUser } from "./model/LoggedInUser";
import { AuthenticationService } from "../../services/authentication/authentication.service";

@Component({
  moduleId: module.id,
  templateUrl: 'login-form.component.html',
  selector: 'login-form'
})
export class LoginFormComponent {

  model = new LoggedInUser();
  private successful: Boolean = true;
  
  constructor(private auth: AuthenticationService) {
    
  }

  performLogin() {
    this.auth.login(this.model)
        .subscribe(res => console.log(res)/*TODO: make redirect to /home*/,
                   err => this.successful = false);
  }
}