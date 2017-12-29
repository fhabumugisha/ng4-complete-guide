import { Effect, Actions } from '@ngrx/effects/';
import { Router } from '@angular/router';
import * as RecipeActions from './recipe.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Recipe } from 'app/recipes/recipe.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRecipe from './recipe.reducers';

@Injectable()
export class RecipeEffects {

  @Effect()
  recipeFecth = this.action$
  .ofType(RecipeActions.FETCH_RECIPES)
  .switchMap(
    (action: RecipeActions.FecthRecipes) => {
     return this.httpClient.get<Recipe[]>('https://fab-ng-recipe-book.firebaseio.com/recipes.json', {
        observe: 'body',
        responseType: 'json'
      })

    }
   )
   .map(
    (recipes) => {
      console.log(recipes);
      for (const recipe of recipes) {
        if (!recipe['ingredients']) {
          recipe['ingredients'] = [];
        }
      }
      return {
        type: RecipeActions.SET_RECIPES,
        payload: recipes
      };
    }
  )
   ;


   @Effect({dispatch: false})
   recipeStore = this.action$
   .ofType(RecipeActions.STORE_RECIPES)
   .withLatestFrom(this.store.select('recipes'))
    .switchMap(
     ([action, state]) => {
      const req = new HttpRequest(
                        'PUT',
                        'https://fab-ng-recipe-book.firebaseio.com/recipes.json',
                         state.recipes,
                          {reportProgress: true}
                        );
    return this.httpClient.request(req);
     }) ;


  constructor(
    private action$: Actions,
    private router: Router,
    private httpClient: HttpClient,
  private store:Store<fromRecipe.FeatureState>) {}

}
