import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe-list/recipe.model';
import { Injectable } from '@angular/core';
import { ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

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
}
