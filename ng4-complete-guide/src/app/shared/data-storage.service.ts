import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Recipe } from '../recipes/recipe-list/recipe.model';
import { HttpHeaders } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';

@Injectable()
export class DataStorageService {

  constructor( private http: HttpClient,
              private recipeService: RecipeService,
            private authService: AuthService) { }

  storeRecipes() {

    const headers = new HttpHeaders({'Content-type' : 'application/json'});
    return this.http.put('https://fab-ng-recipe-book.firebaseio.com/recipes.json',
                          this.recipeService.getRecipes(),
                           {headers: headers  }
                          );
    /*  const req = new HttpRequest('PUT',
                              'https://fab-ng-recipe-book.firebaseio.com/recipes.json',
                              this.recipeService.getRecipes(),
                              {reportProgress: true,
                                params: new HttpParams().set('auth', token)
                              }
                      );
                    return  this.http.request(req); */
  }

  getRecipes() {
    const token =  this.authService.getToken();
    return  this.http.get<Recipe[]>('https://fab-ng-recipe-book.firebaseio.com/recipes.json')
    .map(
      (recipes) => {
         for(const recipe of recipes){
           if(!recipe['ingredients']) {
            recipe['ingredients'] = [];
           }

         }
        return recipes;
     }
     )
    .subscribe(
     (recipes: Recipe[]) => {

        this.recipeService.saveRecipes(recipes);

    },
     (error: HttpErrorResponse) =>  console.log('Something went wrong')
  );

  }

}
