import { Recipe } from './recipes/recipe-list/recipe.model';

import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  activeMenu = 'Recipe Book';
  title = 'app';

  onMenuChanged(menuData: {clickedMenu: string}) {
    console.log('onMenuChanged called');
    this.activeMenu =  menuData.clickedMenu;

  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: 'AIzaSyAxYpixLJde1DScfIR0N9BNwblu-xQfBnU',
      authDomain: 'fab-ng-recipe-book.firebaseapp.com'
    });
  }
}
