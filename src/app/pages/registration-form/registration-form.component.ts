/**
 * Author: Mary Kuchumova
 * Date: 28 June 2016
 * Time: 14:00
 */

import { Component } from '@angular/core';
import { NgForm }    from '@angular/common';
import { RegisteringUser } from "./model/registering-user";

@Component({
  moduleId: module.id,
  templateUrl: 'registration-form.component.html',
  selector: 'registration-form'
})
export class RegistrationFormComponent {

  model = new RegisteringUser();

}