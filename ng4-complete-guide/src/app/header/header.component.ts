import { Component, EventEmitter, Output } from '@angular/core';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    menus: [{ path: string, label: String }] = [
        { path: '', label: 'Home' },
        { path: 'shopping-list', label: 'Shopping List' },
        { path: 'recipe-book', label: 'Recipe Book' }
    ];
    // @Output() menuClicked = new EventEmitter<{clickedMenu: string}>();
    constructor() { }

    /*  onMenuClicked(clickedItem: string) {
         console.log(clickedItem);
          this.menuClicked.emit({clickedMenu: clickedItem});
     } */
}
