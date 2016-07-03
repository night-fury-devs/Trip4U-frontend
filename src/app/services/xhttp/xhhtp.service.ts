/**
 * Author: Alexey Kleschikov
 * Date: 03 Jul 2016
 * Time: 18:49
 */

import { Http, Request, RequestOptionsArgs, Response, ConnectionBackend, RequestOptions } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { environment as env } from "../../environment";

@Injectable()
export class XHttp extends Http {

  private host = env.backend_host.endsWith('/') ? env.backend_host : env.backend_host + '/';

  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
    super(backend, defaultOptions);
  }

  request(url: string|Request, options?: RequestOptionsArgs): Observable<Response> {
    return super.request(this.host + url, options);
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.get(this.host + url, options);
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return super.post(this.host + url, body, options);
  }

  put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return super.put(this.host + url, body, options);
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.delete(this.host + url, options);
  }

  patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return super.patch(this.host + url, body, options);
  }

  head(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.head(this.host + url, options);
  }

  static extract(response: Response): any {
    return response.json() || {};
  }
}