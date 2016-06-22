/**
 * Author: Alexey Kleschikov
 * Date: 22 June 2016
 * Time: 11:34
 */

import {Component, OnInit} from "@angular/core";
    
@Component({
    moduleId: module.id,
    templateUrl: "side-menu.component.html",
    styleUrls: ["side-menu.component.css"],
    selector: "t4u-side-menu"
})
export class SideMenuComponent implements OnInit {
    ngOnInit() {
        $(".button-collapse").sideNav({
            menuWidth: 300, // Default is 240
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        });
    }
}