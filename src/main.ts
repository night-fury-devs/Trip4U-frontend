/**
 * Author: Mary Kuchumova
 * Date: 25 May 2016
 * Time: 23:17
 */

import { bootstrap } from "@angular/platform-browser-dynamic";
import { ROUTER_PROVIDERS } from "@angular/router-deprecated";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { disableDeprecatedForms, provideForms } from "@angular/forms";
import { HTTP_PROVIDERS } from "@angular/http";
import { AppComponent, AuthenticationService } from "./app/";

bootstrap(<any>AppComponent, [
  ROUTER_PROVIDERS,
  { provide: LocationStrategy, useClass: HashLocationStrategy },
  disableDeprecatedForms(),
  provideForms(),
  AuthenticationService,
  HTTP_PROVIDERS
]);