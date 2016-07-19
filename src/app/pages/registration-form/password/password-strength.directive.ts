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

  private message: string;
  private style: string;
  
  private WEAK_PASSWORD_RATE = 30;
  private NORMAL_PASSWORD_RATE = 50;
  
  constructor(el: ElementRef, passwordCheckerService: PasswordCheckerService) {
    this.el = el.nativeElement;
    this.passwordCheckerService = passwordCheckerService;
  }

  @Input('passwordStrength') password;
  @Output() passwordStrengthChange = new EventEmitter();
  
  @HostListener('keyup') onPasswordChanged() {
    var strengthRate = this.passwordCheckerService.measurePasswordStrength(this.password);
    if(!this.el.classList.contains('error')) {
      if (strengthRate <= this.WEAK_PASSWORD_RATE) {
        this.message = 'Weak password';
        this.style = 'weak-password';
      } else if (strengthRate <= this.NORMAL_PASSWORD_RATE) {
        this.message = 'Normal password';
        this.style = 'normal-password';
      } else {
        this.message = 'Strong password';
        this.style = 'strong-password';
      }
      this.passwordStrengthChange.emit({
        message: this.message,
        style: this.style
      })
    } else {
      this.el.classList.remove('strong-password', 'normal-password', 'weak-password');
    }
  }
}