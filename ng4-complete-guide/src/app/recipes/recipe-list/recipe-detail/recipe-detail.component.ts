import { RecipeService } from './../../recipe.service';
import { ShoppingListService } from './../../../shopping-list/shopping-list.service';
import { Ingredient } from './../../../shared/ingredient.model';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;


  constructor(private recipeService: RecipeService,
    private authService: AuthService,
     private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    const  id = +this.route.snapshot.params['id'];
    this. recipe =  this.recipeService.getRecipe(id);

    this.route.params.subscribe(
      (params: Params) => {
        this.recipe =  this.recipeService.getRecipe(+params['id']);
      }
    );
  }

  onRecipeSelected(recipeData: Recipe) {
    this.recipe =  recipeData;
  }

  onAddToShoppingList(ingredients: Ingredient[]) {
      this.recipeService.addToShoppingList(ingredients);

  }

  onDelete() {
  this.recipeService.deleteRecipe(this.recipe);
    this.router.navigate(['recipes']);
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
