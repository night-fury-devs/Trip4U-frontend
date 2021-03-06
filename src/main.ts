/**
 * Author: Mary Kuchumova
 * Date: 25 May 2016
 * Time: 23:17
 */

import { bootstrap } from "@angular/platform-browser-dynamic";
import { ROUTER_PROVIDERS } from "@angular/router-deprecated";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { disableDeprecatedForms, provideForms } from "@angular/forms";
import { HTTP_PROVIDERS, ConnectionBackend, XHRBackend } from "@angular/http";
import { AppComponent } from "./app/";
import { XHttp, AuthenticationService, ModalService, ElasticsearchService } from "./app/services/index";
import { PasswordCheckerService } from "./app/pages/";

bootstrap(<any>AppComponent, [
  ROUTER_PROVIDERS,
  { provide: LocationStrategy, useClass: HashLocationStrategy },
  disableDeprecatedForms(),
  provideForms(),
  HTTP_PROVIDERS,
  { provide: ConnectionBackend, useClass: XHRBackend },
  XHttp,
  AuthenticationService,
  PasswordCheckerService,
  ElasticsearchService,
  ModalService
]);