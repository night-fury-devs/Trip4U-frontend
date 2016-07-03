/**
 * Author: Alexey Kleschikov
 * Date: 28 Jun 2016
 * Time: 21:56
 */

import { Injectable } from "@angular/core";
import { URLSearchParams, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import { LoggedInUser } from "../../pages";
import { TokenResponse } from "./token-response.model";
import { XHttp } from "../xhttp/xhhtp.service";


@Injectable()
export class AuthenticationService {

  private loginUrl = 'auth/login';
  private registerUrl = 'auth/register';
  private confirmUrl = 'auth/confirm';

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
               .catch((err) => {
                 console.error(err);
                 return Observable.throw(err);
               })
  }

  confirm(id: string): Observable<boolean> {
    return this.xhttp.post(this.confirmUrl, { id: id })
               .map(XHttp.extract)
               .catch(err => {
                 console.error(err);
                 return Observable.throw(err)
               })
  }

  private storeToken(response: TokenResponse) {
    sessionStorage.setItem('token', response.token);
    return Observable.create(true)
  }
}