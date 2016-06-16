/**
 * Author: Mary Kuchumova
 * Date: 10 June 2016
 * Time: 10:57
 */
/// <reference path="../../../typings/globals/jquery/index.d.ts" />
/// <reference path="../../../typings/globals/materialize-css/index.d.ts" />
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'landingpage.component.html'
})
export class LandingPageComponent {

    constructor() {
        $(document).ready(function(){
            $('.parallax').parallax();
        });
    }
    
}