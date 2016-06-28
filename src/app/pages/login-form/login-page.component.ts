/**
 * Author: Mary Kuchumova
 * Date: 26 Jun 2016
 * Time: 16:08
 */

import { Component } from '@angular/core';

import { LoggedInUser } from './model/LoggedInUser';

@Component({
  moduleId: module.id,
  templateUrl: 'login-form.component.html',
  selector: 'login-form'
})  
export class LoginFormComponent {

  model = new LoggedInUser();

  performLogin() {
    //TODO: add login logic and ajax request here
    console.log(this.model);
  }
}