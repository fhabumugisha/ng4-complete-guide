import { SignupComponent } from './auth/signup/signup.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-list/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-list/recipe-detail/recipe-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'recipes', component: RecipesComponent,
     children: [
        {path: '', component: RecipeStartComponent},
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent}
    ]},
    { path: 'shopping-list', component: ShoppingListComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'signin', component: SigninComponent},

    { path: '**', component: PageNotFoundComponent }
];

@NgModule ({
    imports: [  RouterModule.forRoot(appRoutes)  ],
    exports: [ RouterModule]
})

export class AppRoutingModule {


}
