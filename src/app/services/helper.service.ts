/**
 * Author: Alexey Kleschikov
 * Date: 05 July 2016
 * Time: 10:37
 */

import { Observable } from "rxjs/Rx";

export class Helper {
  
  static handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}