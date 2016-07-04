/**
 * Author: Alexey Kleschikov
 * Date: 28 Jun 2016
 * Time: 21:56
 */

import { Injectable } from "@angular/core";
import { URLSearchParams, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import { LoggedInUser, RegisteringUser } from "../../pages";
import { TokenResponse } from "./token-response.model";
import { XHttp } from "../xhttp/xhhtp.service";


@Injectable()
export class AuthenticationService {

  private loginUrl = 'auth/login';
  private registerUrl = 'auth/register';
  private confirmUrl = 'auth/confirm';
  private tokenKey = 'token';

  constructor(private xhttp: XHttp) {
  }

  login(user: LoggedInUser): Observable<any> {
    let params = new URLSearchParams();
    let headers = new Headers();

    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    params.append('username', user.userName);
    params.append('password', user.password);

    return this.xhttp.post(this.loginUrl, params, headers)
               .map(XHttp.extract)
               .map(this.storeToken)
               .catch(AuthenticationService.handleError)
  }
  
  register(registeringUser: RegisteringUser) {
    return this.xhttp.post(this.registerUrl, registeringUser)
        .map(XHttp.extract)
        .catch(AuthenticationService.handleError)
  }

  confirm(id: string): Observable<boolean> {
    return this.xhttp.post(this.confirmUrl, { id: id })
               .map(XHttp.extract)
               .catch(AuthenticationService.handleError)
  }

  logout() {
    this.removeToken();
  }

  private static extractData(response: Response) {
    let body = response.json();
    return body || {}
  }

  private storeToken(response: TokenResponse) {
    sessionStorage.setItem(this.tokenKey, response.token);
    return Observable.create(true)
  }

  private removeToken() {
    sessionStorage.removeItem(this.tokenKey);
  }

  private static handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}