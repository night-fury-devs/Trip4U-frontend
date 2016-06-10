/**
 * Author: Mary Kuchumova
 * Date: 25 May 2016
 * Time: 21:46
 */

import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {LandingPageComponent} from "./landingpage.component";
import {LoginComponent} from "./login.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>Aloha :)</h1>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/', name: 'App', component: <any>LandingPageComponent, useAsDefault: true},
    {path: '/login', name: 'Login', component: <any>LoginComponent}
])
export class AppComponent {
    
}