
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

import { RecipesComponent } from './recipes/recipes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth-guard.service';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
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
