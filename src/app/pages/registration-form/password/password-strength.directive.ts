/**
 * Author: Mary Kuchumova
 * Date: 14 July 2016
 * Time: 17:12
 */

import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import {PasswordCheckerService} from "./password-checker.service";

@Directive({
  selector: '[passwordStrength]'
})

export class PasswordStrengthDirective {

  private el: HTMLElement;
  private passwordCheckerService: PasswordCheckerService;

  constructor(el: ElementRef, passwordCheckerService: PasswordCheckerService) {
    this.el = el.nativeElement;
    this.passwordCheckerService = passwordCheckerService;
  }

  @Input('passwordStrength') password;

  @HostListener('keyup') onPasswordChanged() {
    var strengthRate = this.passwordCheckerService.measurePasswordStrength(this.password);
    if(strengthRate < 4) {
      this.el.classList.add('weak-password');
      this.el.classList.remove('normal-password', 'strong-password');
      console.log('low');
    } else if (strengthRate < 10) {
      this.el.classList.add('normal-password');
      this.el.classList.remove('weak-password', 'strong-password');
      console.log('medium');
    } else {
      this.el.classList.add('strong-password');
      this.el.classList.remove('normal-password', 'weak-password');
      console.log('high');
    }
  }
}