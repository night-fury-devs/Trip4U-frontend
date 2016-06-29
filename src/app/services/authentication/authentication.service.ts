/**
 * Author: Alexey Kleschikov
 * Date: 28 Jun 2016
 * Time: 21:56
 */

import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import { LoggedInUser } from "../../pages";
import { TokenResponse } from "./token-response.model";

@Injectable()
export class AuthenticationService {

  private loginUrl = 'auth/login';
  private registerUrl = 'auth/register';
  private confirmUrl = 'auth/confirm';

  constructor(private http: Http) {}

  login(user: LoggedInUser): Observable<boolean> {
    let requestObject = {
      username: user.userName,
      password: user.password
    };

    return this.http.post(this.loginUrl, user)
                    .map(AuthenticationService.extractData)
                    .map(AuthenticationService.storeToken)
  }

  confirm(id: string): Observable<boolean> {
    return this.http.post(this.confirmUrl, { id: id })
                    .map(AuthenticationService.extractData)
  }
  
  private static extractData(response: Response) {
    let body = response.json();
    return body.data || { };
  }
  
  private static storeToken(response: TokenResponse) {
    sessionStorage.setItem('token', response.token);
    return new Observable<boolean>(true);
  }
}