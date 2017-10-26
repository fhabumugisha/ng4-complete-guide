import { Ingredient } from './../shared/ingredient.model';
import { OnInit, EventEmitter } from '@angular/core';
export class ShoppingListService implements OnInit {

    ingredientCreated =  new EventEmitter<Ingredient[]>();

    ingredients: Ingredient[] = [
        new Ingredient('Avocado', 10),
        new Ingredient('Banane', 11),
        new Ingredient('Kiwi', 5)
      ];

      constructor() {}
      ngOnInit() {

      }

      getIngredients() {
          return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient) {
          this.ingredients.push(ingredient);
          this.ingredientCreated.emit(this.ingredients.slice());
      }

}
