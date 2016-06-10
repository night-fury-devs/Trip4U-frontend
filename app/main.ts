/**
 * Author: Mary Kuchumova
 * Date: 25 May 2016
 * Time: 23:17
 */

import { bootstrap }         from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS }  from '@angular/router-deprecated';

import { AppComponent }      from './app.component';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS
]);