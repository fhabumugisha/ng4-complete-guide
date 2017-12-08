
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HomeComponent } from './core/home/home.component';

import { RecipesComponent } from './recipes/recipes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth-guard.service';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
    { path: 'shopping-list', component: ShoppingListComponent}
    // ,

    // { path: '**', component: PageNotFoundComponent }
];

@NgModule ({
    imports: [  RouterModule.forRoot(appRoutes)  ],
    exports: [ RouterModule]
})

export class AppRoutingModule {


}
