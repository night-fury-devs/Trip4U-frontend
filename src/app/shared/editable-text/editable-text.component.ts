/**
 * Author: Alexey Kleschikov
 * Date: 06 July 2016
 * Time: 15:50
 */

import { Component, Input, AfterViewInit, Output, EventEmitter } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 't4u-editable-text',
  templateUrl: 'editable-text.component.html',
  styleUrls: ['editable-text.component.css']
})
export class EditableTextComponent implements AfterViewInit{
  @Input() text: string;
  @Input() label: string;
  @Output() textChanged: EventEmitter<string>;
  
  constructor() {
    this.textChanged = new EventEmitter<string>();
  }

  ngAfterViewInit() {
    this.initializeLayout();
  }

  private initializeLayout() {
    let input = $('.editable__input');
    let p = $('.editable__p');
    
    input.hide()
         .focusout(e => this.finishEdit(e))
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
    input.hide();
    if (event.type !== 'focusout') return;
    
    let p = input && input.prev();
    let value = input.val();
    
    this.textChanged.emit(value);

    p.text(value);
    p.show();
  }
}