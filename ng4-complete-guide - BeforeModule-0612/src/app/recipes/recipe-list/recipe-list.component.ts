
import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.model';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit , OnDestroy {
  private subscription: Subscription;
   recipes: Recipe[];

constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes =  this.recipeService.getRecipes();
    this.subscription =   this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
          this.recipes = recipes;
      }
    );
  }

ngOnDestroy() {
  this.subscription.unsubscribe();
}


}


