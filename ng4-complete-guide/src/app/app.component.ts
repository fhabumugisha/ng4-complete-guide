import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  activeMenu = 'Recipe Book';
  title = 'app';

  onMenuChanged(menuData: {clickedMenu: string}) {
    console.log('onMenuChanged called');
    this.activeMenu =  menuData.clickedMenu;

  }
}
