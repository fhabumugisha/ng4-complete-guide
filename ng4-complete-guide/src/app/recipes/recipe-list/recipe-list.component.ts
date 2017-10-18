import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  selectedRecipe: Recipe;
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
 recipes: Recipe[] = [
  new Recipe('A test recipe', 'This is a simple test',
   'https://get.pxhere.com/photo/dish-food-recipe-fast-food-cuisine-garnish-snacks-vegetarian-food-power-supply-appetizer-tidbits-side-dish-arancini-hors-d-oeuvre-finger-food-rissole-croquette-fried-food-pakora-chicken-nugget-american-food-esfiha-kibe-vetkoek-1375826.jpg'),
   new Recipe('A test recipe 2', 'This is a simple test 2',
   'https://get.pxhere.com/photo/dish-food-recipe-fast-food-cuisine-garnish-snacks-vegetarian-food-power-supply-appetizer-tidbits-side-dish-arancini-hors-d-oeuvre-finger-food-rissole-croquette-fried-food-pakora-chicken-nugget-american-food-esfiha-kibe-vetkoek-1375826.jpg')
];


 
constructor() { }

  ngOnInit() {
  }

  onRecipeWasSelected(recipeData: Recipe) {
    this.recipeWasSelected.emit(recipeData);
  }

  
  onRecipeSelected(recipeData: Recipe){
    console.log('Selected recipe : ' + recipeData.name);
    this.recipeWasSelected.emit(recipeData);
  }
}


