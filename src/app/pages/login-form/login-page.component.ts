/**
 * Author: Mary Kuchumova
 * Date: 26 Jun 2016
 * Time: 16:08
 */



import { Component } from '@angular/core';
import { NgForm } from '@angular/common';

import { LoggedInUser } from './model/LoggedInUser';

@Component({
  moduleId: module.id,
  templateUrl: 'login-form.component.html',
  selector: 'login-form'
})  
export class LoginFormComponent {

  model = new LoggedInUser('login', 'password', true);

  
}