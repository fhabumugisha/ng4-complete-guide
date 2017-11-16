import { Ingredient } from './../shared/ingredient.model';
import { OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
export class ShoppingListService implements OnInit {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  ingredients: Ingredient[] = [
    new Ingredient('Avocado', 10),
    new Ingredient('Banana', 11),
    new Ingredient('Kiwi', 5)
  ];

  constructor() {}
  ngOnInit() {}

  getIngredients() {
    return this.ingredients.slice();
  }
  getIngredient(index: number) {
    return this.ingredients[index];
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
     this.ingredients[index] =  newIngredient;
     this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  addToShoppingList(newIngredients: Ingredient[]) {
    for (const i of newIngredients) {
      if (this.ingredients.find(ing => ing.name === i.name)) {
        console.log(i.name + ' exists!');

        this.ingredients.find(ing => ing.name === i.name).amount =
          this.ingredients.find(ing => ing.name === i.name).amount + i.amount;
      } else {
        this.ingredients.push(i);
      }
    }
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
