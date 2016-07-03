/**
 * Author: Mary Kuchumova
 * Date: 10 June 2016
 * Time: 10:57
 */

import { Component, Type, OnInit } from "@angular/core";
import { ParallaxItemComponent } from "./parallax-item/parallax-item.component";
import { IntroPanelComponent } from "./intro-panel/intro-panel.component";

@Component({
  moduleId: module.id,
  templateUrl: 'landing-page.component.html',
  selector: 'landing-page',
  directives: [<Type>ParallaxItemComponent, <Type>IntroPanelComponent]
})
export class LandingPageComponent implements OnInit {

  constructor() {
    this.initParallax();
  }

  ngOnInit() {
    this.initParallax();
  }

  initParallax() {
    $(document).ready(function () {
      $('.parallax').parallax();
    });
  }

}