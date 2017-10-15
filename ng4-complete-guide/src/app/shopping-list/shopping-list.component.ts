import { Component, OnInit } from '@angular/core';
import { Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Avocado', 10),
    new Ingredient('Banane', 11),
    new Ingredient('Kiwi', 5)
  ];
  constructor() {   }

  ngOnInit() {
  }

}
