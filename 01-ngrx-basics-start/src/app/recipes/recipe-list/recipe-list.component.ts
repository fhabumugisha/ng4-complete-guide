import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { Recipe } from '../recipe.model';

import { Store } from '@ngrx/store';
import * as fromRecipe from '../store/recipe.reducers';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];


  recipeState: Observable<{ recipes: Recipe[] }>;

  constructor(private router: Router,
              private route: ActivatedRoute,
            private store: Store<fromRecipe.FeatureState>) {
  }

  ngOnInit() {
   /*  this.subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      );
    this.recipes = this.recipeService.getRecipes(); */
    this.recipeState = this.store.select('recipes')
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }


}
