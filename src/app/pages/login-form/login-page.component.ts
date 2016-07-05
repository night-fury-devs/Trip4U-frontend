/**
 * Author: Mary Kuchumova
 * Date: 26 Jun 2016
 * Time: 16:08
 */

import { Component } from "@angular/core";
import { Router } from "@angular/router-deprecated";
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
  
  constructor(private auth: AuthenticationService,
              private router: Router) {}

  performLogin() {
    this.auth.login(this.model)
        .subscribe(res => this.router.navigate(['Home']),
                   err => this.successful = false);
  }
}