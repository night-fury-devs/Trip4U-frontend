/**
 * Author: Mary Kuchumova
 * Date: 11 Июль 2016
 * Time: 10:48
 */

import { Component, Input } from "@angular/core";

@Component({
  moduleId: module.id,
  templateUrl: 'modal.component.html',
  selector: 'modal'
})
export class ModalComponent{

  @Input() modalId: string;

  closeOk() {
    alert('OK pressed');
    $('#'+this.modalId).closeModal();
  }

  closeCancel() {
    alert('Cancel pressed');
    $('#'+this.modalId).closeModal();
  }

}