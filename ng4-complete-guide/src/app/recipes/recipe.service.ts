import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe-list/recipe.model';
import { Injectable, EventEmitter } from '@angular/core';
import { ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

   private recipes: Recipe[] = [
        new Recipe('A test recipe', 
                  'This is a simple test',
                  'https://i.imgur.com/68cuwYi.jpg',
                  [
                        new Ingredient('Avocado', 2), 
                        new Ingredient('Banana', 3)
                  ]  
        ),
         new Recipe('A test recipe 2', 
         'This is a simple test 2',
         'https://i.imgur.com/fK1BvcZ.jpg',
         [
            new Ingredient('Kiwi', 2), 
            new Ingredient('Mango', 3)
      ] 
        )
      ];

      recipeSelected = new EventEmitter<Recipe>();
    constructor(private shoppingListService: ShoppingListService) {}

getRecipes() {
    return this.recipes.slice();
}

}
