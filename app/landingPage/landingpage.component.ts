/**
 * Author: Mary Kuchumova
 * Date: 10 June 2016
 * Time: 10:57
 */

import {Component, Type} from '@angular/core';
import {UpButtonComponent} from "../up-button/up-button.component";

@Component({
    moduleId: module.id,
    templateUrl: 'landingpage.component.html',
    selector: 'landing-page',
    directives: [<Type>UpButtonComponent]
})
export class LandingPageComponent {

    constructor() {
        $(document).ready(function(){
            $('.parallax').parallax();
        });
    }
    
}