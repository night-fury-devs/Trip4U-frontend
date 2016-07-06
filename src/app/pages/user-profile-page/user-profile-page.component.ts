/**
 * Author: Alexey Kleschikov
 * Date: 06 July 2016
 * Time: 10:46
 */

import { Component, Type } from "@angular/core";
import { ContentPanelComponent } from "../../shared/content-panel/content-panel.component";
import { EditableTextComponent } from "../../shared/editable-text/editable-text.component";

@Component({
  moduleId: module.id,
  selector: 't4u-user-profile-page',
  styleUrls: ['user-profile-page.component.css'],
  templateUrl: 'user-profile-page.component.html',
  directives: [<Type>ContentPanelComponent, <Type>EditableTextComponent]
})
export class UserProfilePageComponent {
  imgSource: string = 'https://pixabay.com/static/uploads/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
}