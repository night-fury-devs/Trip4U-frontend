/**
 * Author: Mary Kuchumova
 * Date: 25 May 2016
 * Time: 21:46
 */

import {Component, Type} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import { LandingPageComponent } from "./landingPage/landingpage.component";
import { EmailConfirmPageComponent } from './email-confirm-page/email-confirm-page.component';
import { UpButtonComponent } from "./up-button/up-button.component";

@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: 'app.component.html',
    directives: [ROUTER_DIRECTIVES, <Type>UpButtonComponent]
})
@RouteConfig([
    {path: '/', name: 'App', component: <any>LandingPageComponent, useAsDefault: true},
    {path: '/confirm', name: 'EmailConfirmPage', component: EmailConfirmPageComponent, useAsDefault: false}
])
export class AppComponent {
}