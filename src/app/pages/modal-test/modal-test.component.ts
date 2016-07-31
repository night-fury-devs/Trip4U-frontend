/**
 * Author: Mary Kuchumova
 * Date: 11 Июль 2016
 * Time: 10:50
 */

import { Component, Type } from "@angular/core";
import {ModalService} from "../../services/modal/modal.service";
import {Comp1Component} from "./comp1/comp1.component";

@Component({
  moduleId: module.id,
  templateUrl: 'modal-test.component.html',
  selector: 'modal-test',
  directives: [<Type>Comp1Component]
})
export class ModalTestComponent {
  
  value1=0;
  value2=2;
  id1='id1';
  id2='id2';
  
  constructor( private modalService: ModalService){
    
  }
  
  private ready() {
    alert('Ready');
  }
  
  private closed() {
    alert('Closed');
  }
  
  loadModal(modalId: string){
    alert(modalId);
    this.modalService.loadModal(modalId, this.ready, this.closed, null);
  }
  
}