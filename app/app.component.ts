/**
 * Author: Mary Kuchumova
 * Date: 25 May 2016
 * Time: 21:46
 */

import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {LandingPageComponent} from "./landingPage/landingpage.component";

@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: 'app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/', name: 'App', component: <any>LandingPageComponent, useAsDefault: true}
])
export class AppComponent {
}