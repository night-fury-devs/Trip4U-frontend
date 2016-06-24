/**
 * Author: Mary Kuchumova
 * Date: 25 May 2016
 * Time: 21:46
 */

import {Component, Type, OnInit} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {LandingPageComponent, EmailConfirmPageComponent} from "./pages/";
import {UpButtonComponent} from "./shared/";

@Component({
  selector: 'app',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES, <Type>UpButtonComponent]
})
@RouteConfig([
  {path: '/', name: 'App', redirectTo: ['Home']},
  {path: '/home', name: 'Home', component: <Type>LandingPageComponent, useAsDefault: true},
  {path: '/confirm', name: 'EmailConfirmPage', component: <Type>EmailConfirmPageComponent},
])
export class AppComponent implements OnInit {
  ngOnInit() {
    $(document).ready(() => {
      var up_button = $('#up-button');
      //Check to see if the window is top if not then display button
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          up_button.fadeIn(() => up_button.css("opacity", 1));
        } else {
          up_button.fadeOut(() => up_button.css("opacity", 0));
        }
      });

      //Click event to scroll to top
      up_button.click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
      });

    });
  }
}