import { Recipe } from './recipe-list/recipe.model';
import {Injectable } from '@angular/core';
import { ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

   private recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is a simple test',
         'https://i.imgur.com/68cuwYi.jpg'),
         new Recipe('A test recipe 2', 'This is a simple test 2',
         'https://i.imgur.com/fK1BvcZ.jpg')
      ];

    constructor(private shoppingListService: ShoppingListService) {}

getRecipes() {
    return this.recipes.slice();
}

}
