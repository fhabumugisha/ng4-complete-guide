import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';

import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list.service';
import { Component, OnInit, ViewChild} from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

 @ViewChild('f') ingredientForm: NgForm;
editMode = false;
subscription: Subscription;
editedItemIndex: number;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
          this.editMode = true;
          const ingred = this.shoppingListService.getIngredient(index);
          this.ingredientForm.setValue({
            'name' : ingred.name,
            'amount' : ingred.amount
          });
      }
    );
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    const newIngredient = new Ingredient(this.ingredientForm.value.name,
                   this.ingredientForm.value.amount);
    if (this.editMode) {
        this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    }else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.ingredientForm.reset();
  }

}
