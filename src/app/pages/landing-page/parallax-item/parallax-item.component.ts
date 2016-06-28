/**
 * Author: Mary Kuchumova
 * Date: 23 June 2016
 * Time: 16:05
 */


import { Component, Input } from "@angular/core";

@Component({
  moduleId: module.id,
  templateUrl: 'parallax-item.component.html',
  selector: 'parallax-item'
})
export class ParallaxItemComponent {

  @Input() text: string;
  @Input() imageCaption: string;
  @Input() image: string;
  @Input() caption: string;
  @Input() icon: string;

}

