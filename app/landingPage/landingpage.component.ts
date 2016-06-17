/**
 * Author: Mary Kuchumova
 * Date: 10 June 2016
 * Time: 10:57
 */
/// <reference path="../../typings/globals/jquery/index.d.ts" />
/// <reference path="../../typings/globals/materialize-css/index.d.ts" />
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'landingpage.component.html'
})
export class LandingPageComponent implements OnInit{

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