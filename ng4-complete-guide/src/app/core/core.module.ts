import { AppRoutingModule } from './../app-routing.module';

import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { RecipeService } from '../recipes/recipe.service';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  declarations: [
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  providers: [
    RecipeService,
    ShoppingListService,
    DataStorageService,
    AuthService

  ]
})
export class CoreModule { }
