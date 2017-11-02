import {Component, EventEmitter, Output} from '@angular/core';
@Component({
    selector: 'app-header',
    templateUrl : './header.component.html',
    styleUrls : ['./header.component.css']
})
export class HeaderComponent {
    menus: string[] ;
   @Output() menuClicked = new EventEmitter<{clickedMenu: string}>();
    constructor() {
        this.menus = ['Home', 'Shopping List', 'Recipe Book'];
    }

    onMenuClicked(clickedItem: string) {
        console.log(clickedItem);
         this.menuClicked.emit({clickedMenu: clickedItem});
    }
}
