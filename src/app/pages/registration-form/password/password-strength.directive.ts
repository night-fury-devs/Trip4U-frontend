/**
 * Author: Mary Kuchumova
 * Date: 14 July 2016
 * Time: 17:12
 */

import {Directive, ElementRef, Input, HostListener, Output, EventEmitter} from '@angular/core';
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
  @Output() passwordStrengthChange = new EventEmitter();

  @HostListener('keyup') onPasswordChanged() {
    var strengthRate = this.passwordCheckerService.measurePasswordStrength(this.password);
    if(!this.el.classList.contains('error')) {
      if (strengthRate < 4) {
        this.passwordStrengthChange.emit({
          message: 'Weak password',
          style: 'weak-password'
        });
      } else if (strengthRate < 10) {
        this.passwordStrengthChange.emit({
          message: 'Normal password',
          style: 'normal-password'
        });
      } else {
        this.passwordStrengthChange.emit({
          message: 'Strong password',
          style: 'strong-password'
        });
      }
    } else {
      this.el.classList.remove('strong-password', 'normal-password', 'weak-password');
    }
  }
}