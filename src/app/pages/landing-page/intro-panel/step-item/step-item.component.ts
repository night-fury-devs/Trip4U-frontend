/**
 * Author: Mary Kuchumova
 * Date: 23 June 2016
 * Time: 17:26
 */

import { Component, Input } from "@angular/core";

@Component({
  moduleId: module.id,
  templateUrl: 'step-item.component.html',
  selector: 'step-item'
})
export class StepItemComponent {

  @Input() icon: string;
  @Input() caption: string;
  @Input() text: string;

}