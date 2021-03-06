/**
 * Author: Mary Kuchumova
 * Date: 25 May 2016
 * Time: 21:46
 */

import { Component, Type, OnInit } from "@angular/core";
import { RouteConfig, ROUTER_DIRECTIVES, Router } from "@angular/router-deprecated";
import { LandingPageComponent, EmailConfirmPageComponent, ModalTestComponent } from "./pages/";
import { UpButtonComponent } from "./shared/";
import { LoginFormComponent } from "./pages/login-form/login-page.component";
import { RegistrationFormComponent } from "./pages/registration-form/registration-form.component";
import { AuthenticationService } from "./services/authentication/authentication.service";

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
  {path: '/register', name: 'Registration', component: <Type>RegistrationFormComponent},
  {path: '/login', name: 'Login', component: <Type>LoginFormComponent},
  {path: '/modal-test', name: 'ModalTest', component: <Type>ModalTestComponent}
])
export class AppComponent implements OnInit {

  constructor(private auth: AuthenticationService,
              private router: Router) {}

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
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
      });

    });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['Home']);
  }
}