/**
 * Author: Alexey Kleschikov
 * Date: 28 Jun 2016
 * Time: 21:56
 */

import { Injectable } from "@angular/core";
import { Http, Response, URLSearchParams, Headers } from "@angular/http";
import { Router } from "@angular/router-deprecated";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import { LoggedInUser, RegisteringUser } from "../../pages";
import { TokenResponse } from "./token-response.model";


@Injectable()
export class AuthenticationService {

  private host = 'http://localhost:8080/';
  private loginUrl = 'auth/login';
  private registerUrl = 'auth/register';
  private confirmUrl = 'auth/confirm';

  constructor(
    private http: Http) {
  }

  login(user: LoggedInUser) {
    let params = new URLSearchParams();
    let headers = new Headers();

    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    params.append('username', user.userName);
    params.append('password', user.password);

    this.http.post(this.host + this.loginUrl, params, headers)
        .map(AuthenticationService.extractData)
        .map(this.storeToken)
        .subscribe(() => console.log('')/*this.router.navigate(['Home'])*/)
  }
  
  register(registeringUser: RegisteringUser) {
    return this.http.post(this.host + this.registerUrl, registeringUser)
        .map(AuthenticationService.extractData)
        .catch(AuthenticationService.handleError)
  }

  confirm(id: string): Observable<boolean> {
    return this.http.post(this.confirmUrl, { id: id })
               .map(AuthenticationService.extractData)
  }

  private static extractData(response: Response) {
    let body = response.json();
    return body || {}
  }

  private storeToken(response: TokenResponse) {
    sessionStorage.setItem('token', response.token);
  }

  private static handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}