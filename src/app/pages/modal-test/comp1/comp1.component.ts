/**
 * Author: Mary Kuchumova
 * Date: 11 Июль 2016
 * Time: 10:51
 */

import { Component, Input } from "@angular/core";
import {ModalService} from "../../../services/modal/modal.service";

@Component({
  moduleId: module.id,
  templateUrl: 'comp1.component.html',
  selector: 'comp1'
})
export class Comp1Component {

  @Input() value1: number;
  @Input() modalId: string;

  constructor( private modalService: ModalService){
    
  }

  closeOk() {
    alert('OK pressed');
    this.modalService.closeModal(this.modalId);
  }

  closeCancel() {
    alert('Cancel pressed');
    this.modalService.closeModal(this.modalId);
  }

}