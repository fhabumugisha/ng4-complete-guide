import { ShoppingListService } from './../../../shopping-list/shopping-list.service';
import { Ingredient } from './../../../shared/ingredient.model';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  
  
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onRecipeSelected(recipeData: Recipe) {
    this.recipe =  recipeData;
  }

  onAddToShoppingList(ingredients: Ingredient[]) {
      this.shoppingListService.addToShoppingList(ingredients);

  }

}
