/**
 * Author: Mary Kuchumova
 * Date: 14 July 2016
 * Time: 17:12
 */

import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[passwordStrength]'
})

export class PasswordStrengthDirective {

  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  @Input('passwordStrength') password;

  @HostListener('keyup') onPasswordChanged() {
    console.log(this.password);
  }
}