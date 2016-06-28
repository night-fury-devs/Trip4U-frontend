/**
 * Author: Mary Kuchumova
 * Date: 25 May 2016
 * Time: 23:17
 */

import { bootstrap }         from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS }  from '@angular/router-deprecated';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { AppComponent }      from './app/';

bootstrap(<any>AppComponent, [
  ROUTER_PROVIDERS,
  { provide: LocationStrategy, useClass: HashLocationStrategy },
  disableDeprecatedForms(),
  provideForms()
]);