/**
 * Author: Alexey Kleschikov
 * Date: 08 July 2016
 * Time: 16:57
 */

import { Component, OnInit, AfterViewInit } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 't4u-home-cities',
  templateUrl: 'home-cities.component.html',
  styleUrls: ['home-cities.component.css']
})
export class HomeCitiesComponent implements AfterViewInit {

  numbers = [1,2,3,4,5,6,7,8,9,10];
  
  ngAfterViewInit() {
    this.initializeSlickCarousel();  
  }

  private initializeSlickCarousel() {
    let prevArrow = `<a class="slick-prev t4u-carousel__arrow"><i class="material-icons">chevron_left</i></a>`;
    let nextArrow = `<a class="slick-next t4u-carousel__arrow"><i class="material-icons">chevron_right</i></a>`;
    $('.t4u-carousel').slick({
      centerMode: true,
      centerPadding: '0.5em',
      slidesToShow: 5,
      prevArrow: prevArrow,
      nextArrow: nextArrow
    })
  }
}