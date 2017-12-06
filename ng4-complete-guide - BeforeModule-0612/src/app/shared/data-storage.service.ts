import { AuthService } from '../auth/auth.service';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { Http, Headers , Response} from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Recipe } from '../recipes/recipe-list/recipe.model';
@Injectable()
export class DataStorageService {

  constructor( private http: Http,
              private recipeService: RecipeService,
            private authService: AuthService) { }

  storeRecipes(){
    const token =  this.authService.getToken();
    const headers = new Headers({'Content-type' : 'application/json'});
    return this.http.put('https://fab-ng-recipe-book.firebaseio.com/recipes.json?auth=' + token,
                          this.recipeService.getRecipes(),
                           {headers: headers}
                          );
  }

  getRecipes() {
    const token =  this.authService.getToken();
    return  this.http.get('https://fab-ng-recipe-book.firebaseio.com/recipes.json?auth=' + token)
    .map(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
         for(const recipe of recipes){
           if(!recipe['ingredients']){
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
     (error: Response) =>  console.log('Something went wrong')
  );

  }

}
