/**
 * Author: Mary Kuchumova
 * Date: 28 June 2016
 * Time: 14:00
 */

import { Component } from '@angular/core';
import { NgForm }    from '@angular/common';
import { Router } from '@angular/router-deprecated';

import { RegisteringUser } from "./model/registering-user";
import { AuthenticationService } from "../../services/authentication/authentication.service";

@Component({
  moduleId: module.id,
  templateUrl: 'registration-form.component.html',
  selector: 'registration-form'
})
export class RegistrationFormComponent {

  constructor(private router: Router,
              private auth: AuthenticationService){}
  
  model = new RegisteringUser();
  error = '';

  registerUser(){
    this.auth.register(this.model)
      .subscribe(
        user => {
          this.router.navigate(['EmailConfirmPage']);
          this.model = new RegisteringUser();
          this.error = '';
        },
        error => {
          this.error = 'An error occurred while performing registration: ' + <any>error
        }
      )
  }

}