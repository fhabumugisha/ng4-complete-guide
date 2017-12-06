import { AuthService } from '../auth/auth.service';

import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe-list/recipe.model';
import { Injectable } from '@angular/core';
import { ShoppingListService} from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

   private recipes: Recipe[] = [
        new Recipe(1, 'A test recipe',
                  'This is a simple test',
                  'https://i.imgur.com/68cuwYi.jpg',
                  [
                        new Ingredient('Avocado', 2),
                        new Ingredient('Banana', 3)
                  ]
        ),
         new Recipe(2, 'A test recipe 2',
         'This is a simple test 2',
         'https://i.imgur.com/fK1BvcZ.jpg',
         [
            new Ingredient('Kiwi', 2),
            new Ingredient('Mango', 3)
      ]
        )
      ];


    constructor(private shoppingListService: ShoppingListService) {}

getRecipes() {
    return this.recipes.slice();
}


getRecipe(id: number) {
  const Recipe = this.recipes.find(
    (r) => {
      return r.id === id;
    }
  );
  return Recipe;
}

addToShoppingList(ingredients: Ingredient[]) {
  this.shoppingListService.addToShoppingList(ingredients);
}

addRecipe(recipe: Recipe){
  this.recipes.push(recipe);
  this.recipesChanged.next(this.recipes.slice());

}

updateRecipe(id: number, newRecipe: Recipe) {
  if (this.recipes.find(r => r.id === id)) {
    this.recipes.find(r => r.id === id).name = newRecipe.name;
    this.recipes.find(r => r.id === id).description = newRecipe.description;
    this.recipes.find(r => r.id === id).imagePath = newRecipe.imagePath;
    this.recipes.find(r => r.id === id).ingredients = newRecipe.ingredients;
  }


  this.recipesChanged.next(this.recipes.slice());

  }

  deleteRecipe(recipeToDelete : Recipe){
    this.recipes.splice(this.recipes.indexOf( recipeToDelete));
    this.recipesChanged.next(this.recipes.slice());
  }


  saveRecipes(newRecipes: Recipe[]){
    this.recipes =  newRecipes;
    this.recipesChanged.next(this.recipes.slice());
  }

}
