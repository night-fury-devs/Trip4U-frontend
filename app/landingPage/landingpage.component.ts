/**
 * Author: Mary Kuchumova
 * Date: 10 June 2016
 * Time: 10:57
 */

import {Component, Type} from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'landingpage.component.html',
    selector: 'landing-page'
})
export class LandingPageComponent {

    constructor() {
        $(document).ready(function(){
            $('.parallax').parallax();
        });
    }
    
}