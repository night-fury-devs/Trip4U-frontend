/**
 * Author: Mary Kuchumova
 * Date: 25 May 2016
 * Time: 21:46
 */

import { Component, Type, OnInit } from "@angular/core";
import { RouteConfig, ROUTER_DIRECTIVES, Router } from "@angular/router-deprecated";
import { LandingPageComponent, EmailConfirmPageComponent } from "./pages/";
import { UpButtonComponent } from "./shared/";
import { LoginFormComponent } from "./pages/login-form/login-page.component";
import { RegistrationFormComponent } from "./pages/registration-form/registration-form.component";
import { AuthenticationService } from "./services/authentication/authentication.service";
import { UserProfilePageComponent } from "./pages/user-profile-page/user-profile-page.component";

@Component({
  selector: 'app',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES, <Type>UpButtonComponent]
})
@RouteConfig([
  {path: '/', name: 'App', redirectTo: ['Main']},
  {path: '/main', name: 'Main', component: <Type>LandingPageComponent, useAsDefault: true},
  {path: '/confirm', name: 'EmailConfirmPage', component: <Type>EmailConfirmPageComponent},
  {path: '/register', name: 'Registration', component: <Type>RegistrationFormComponent},
  { path: '/login', name: 'Login', component: <Type>LoginFormComponent },
  { path: '/home', name: 'Home', component: <Type>UserProfilePageComponent }
])
export class AppComponent implements OnInit {

  constructor(private auth: AuthenticationService,
              private router: Router) {}

  ngOnInit() {
    $(document).ready(() => {
      var upButton = $('#up-button');
      this.initializeUpButton(upButton);
      this.initializeWindowScrollAnimation(upButton);
    });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['Home']);
  }

  private initializeUpButton(upButton: JQuery) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        upButton.fadeIn(() => upButton.css('opacity', 1));
      } else {
        upButton.fadeOut(() => upButton.css('opacity', 0));
      }
    });
  }

  private initializeWindowScrollAnimation(upButton: JQuery) {
    upButton.click(function () {
      $('html, body').animate({ scrollTop: 0 }, 800);
      return false;
    });
  }
}