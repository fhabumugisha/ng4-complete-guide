import { Ingredient } from './../shared/ingredient.model';
import { OnInit, EventEmitter } from '@angular/core';
export class ShoppingListService implements OnInit {

    ingredientCreated =  new EventEmitter<Ingredient[]>();

    ingredients: Ingredient[] = [
        new Ingredient('Avocado', 10),
        new Ingredient('Banana', 11),
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

      addToShoppingList(newIngredients: Ingredient[]) {
        for (const i of newIngredients) {
            if( this.ingredients.find(ing => ing.name === i.name)) {
                console.log(i.name + " exists!");
                  
                this.ingredients.find(ing => ing.name === i.name).amount = this.ingredients.find(ing => ing.name === i.name).amount + i.amount;
            }else {
                this.ingredients.push(i);
            }
        }
        this.ingredientCreated.emit(this.ingredients.slice());
      }


}
