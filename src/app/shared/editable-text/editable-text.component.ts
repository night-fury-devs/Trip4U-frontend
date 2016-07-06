/**
 * Author: Alexey Kleschikov
 * Date: 06 July 2016
 * Time: 15:50
 */

import { Component, Input, AfterViewInit } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 't4u-editable-text',
  templateUrl: 'editable-text.component.html',
  styleUrls: ['editable-text.component.css']
})
export class EditableTextComponent implements AfterViewInit{
  @Input() text: string;

  ngAfterViewInit() {
    this.initializeLayout();
  }

  private initializeLayout() {
    let input = $('.editable__input');
    let p = $('.editable__p');
    
    input.hide()
         .focusout(this.finishEdit)
         .keyup(e => {
           if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
             this.finishEdit(e);
             return false;
           } else {
             return true;
           }
         });
    p.click(() => {
      p.hide();
      input.show().focus();
    });
  }
  
  private finishEdit(event) {
    let input = $(event.target);
    let p = input && input.prev();

    p.text(input.val());
    input.hide();
    p.show();
    
  }
}