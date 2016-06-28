/**
 * Author: Mary Kuchumova
 * Date: 23 June 2016
 * Time: 17:10
 */

import { Component, Type, Input } from "@angular/core";
import { StepItemComponent } from "./step-item/step-item.component";

@Component({
  moduleId: module.id,
  templateUrl: 'intro-panel.component.html',
  selector: 'intro-panel',
  directives: [<Type>StepItemComponent]
})
export class IntroPanelComponent {

  @Input() appName: string;
  @Input() imageCaption: string;
  @Input() image: string;
  @Input() textContentCaption: string;
  @Input() textContent: string;

}
