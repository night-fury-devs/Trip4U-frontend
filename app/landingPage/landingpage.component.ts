/**
 * Author: Mary Kuchumova
 * Date: 10 June 2016
 * Time: 10:57
 */

import {Component, Type, OnInit} from '@angular/core';
import {ParallaxItemComponent} from "./parallax-item/parallax-item.component";

@Component({
    moduleId: module.id,
    templateUrl: 'landingpage.component.html',
    selector: 'landing-page',
    directives: [<Type>ParallaxItemComponent]
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