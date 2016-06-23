/**
 * Author: Mary Kuchumova
 * Date: 10 June 2016
 * Time: 10:57
 */

import {Component, OnInit} from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'landing-page.component.html',
    selector: 'landing-page'
})
export class LandingPageComponent implements OnInit {

    constructor() {
        this.initParallax();
    }
    
    ngOnInit() {
        this.initParallax();
    }

    initParallax(){
        $(document).ready(function(){
            $('.parallax').parallax();
        });
    }
    
}