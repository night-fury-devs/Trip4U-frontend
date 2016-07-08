/**
 * Author: Alexey Kleschikov
 * Date: 08 July 2016
 * Time: 16:57
 */

import { Component, OnInit } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 't4u-home-cities',
  templateUrl: 'home-cities.component.html',
  styleUrls: ['home-cities.component.css']
})
export class HomeCitiesComponent implements OnInit {
  ngOnInit() {
    $(document).ready(() => {
      $('.carousel').carousel({
        dist: 0,
        shift: 5
      });
    })
  }
}