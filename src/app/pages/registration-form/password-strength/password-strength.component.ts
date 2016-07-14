/**
 * Author: Mary Kuchumova
 * Date: 14 Jule 2016
 * Time: 15:55
 */

import { Component } from '@angular/core';
import { PasswordStrengthAnalyzer } from '../../../services/password-strength-analyzer.service'

@Component({
  moduleId: module.id,
  templateUrl: 'registration-form.component.html',
  selector: 'registration-form'
})
export class PasswordStrengthComponent {

  constructor(private passwordAnalyzer:PasswordStrengthAnalyzer) {

  }

  

}

