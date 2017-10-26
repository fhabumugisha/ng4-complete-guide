
import { RecipeService } from './../recipe.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  selectedRecipe: Recipe;
  recipes: Recipe[];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
 


 
constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes =  this.recipeService.getRecipes();
  }

  onRecipeWasSelected(recipeData: Recipe) {
    this.recipeWasSelected.emit(recipeData);
  }

  
  onRecipeSelected(recipeData: Recipe){
    console.log('Selected recipe : ' + recipeData.name);
    this.recipeWasSelected.emit(recipeData);
  }
}


