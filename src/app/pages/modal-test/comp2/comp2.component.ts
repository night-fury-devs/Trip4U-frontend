/**
 * Author: Mary Kuchumova
 * Date: 11 Июль 2016
 * Time: 10:51
 */

import { Component, Input } from "@angular/core";

@Component({
  moduleId: module.id,
  templateUrl: 'comp2.component.html',
  selector: 'comp2'
})
export class Comp2Component {

  @Input() value2: number;

}