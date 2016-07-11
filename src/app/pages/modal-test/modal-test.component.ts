/**
 * Author: Mary Kuchumova
 * Date: 11 Июль 2016
 * Time: 10:50
 */

import { Component, Type } from "@angular/core";
import {ModalComponent} from "../../shared/modal-component/modal.component";

@Component({
  moduleId: module.id,
  templateUrl: 'modal-test.component.html',
  selector: 'modal-test',
  directives: [<Type>ModalComponent]
})
export class ModalTestComponent {
  
  value1=0;
  value2=2;
  id1='id1';
  id2='id2';
  
}