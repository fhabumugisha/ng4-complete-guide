import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';

const slRoutes: Routes = [
  { path: 'shopping-list', component: ShoppingListComponent}
];
@NgModule({
  imports: [RouterModule.forChild(slRoutes) ],
  exports: [RouterModule]
})
export class ShoppingListRoutingModule {

}
