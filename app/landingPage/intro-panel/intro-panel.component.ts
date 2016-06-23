/**
 * Author: Mary Kuchumova
 * Date: 23 June 2016
 * Time: 17:10
 */

import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'intro-panel.component.html',
    selector: 'intro-panel'
})
export class IntroPanelComponent{

    @Input() appName: string;
    @Input() imageCaption: string;
    @Input() image: string;

}
