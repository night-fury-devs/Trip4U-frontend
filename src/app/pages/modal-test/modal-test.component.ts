/**
 * Author: Mary Kuchumova
 * Date: 11 Июль 2016
 * Time: 10:50
 */

import { Component } from "@angular/core";

@Component({
  moduleId: module.id,
  templateUrl: 'modal-test.component.html',
  selector: 'modal-test'
})
export class ModalTestComponent {
  
  value1=0;
  value2=2;
  
  loadModal(component: string){
    alert(component);
  }
  
}