/**
 * Author: Mary Kuchumova
 * Date: 28 June 2016
 * Time: 14:00
 */

import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { RegisteringUser } from "./model/registering-user";
import { AuthenticationService } from "../../services/authentication/authentication.service";
import { PasswordStrengthDirective } from "./password/password-strength.directive";

@Component({
  moduleId: module.id,
  templateUrl: 'registration-form.component.html',
  selector: 'registration-form',
  directives: [PasswordStrengthDirective],
  styleUrls: ['registration-form.component.css']
})
export class RegistrationFormComponent {

  constructor(private router: Router,
              private auth: AuthenticationService){}

  model = new RegisteringUser();
  error = '';
  passwordStrengthMessage = '';

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

  onPasswordChange(event: Event) {
    var messageDiv = document.getElementById('password-strength-message');
    var input = document.getElementById('password');
    messageDiv.classList.remove('weak-password-message', 'normal-password-message', 'strong-password-message');
    input.classList.remove('weak-password', 'normal-password', 'strong-password');
    this.passwordStrengthMessage = event['message'];
    input.classList.add(event['style']);
    messageDiv.classList.add(event['style'] + '-message');
  }

}