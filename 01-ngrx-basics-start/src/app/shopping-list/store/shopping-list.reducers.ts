import *  as ShoppingListActions from './shopping-list.actions';
import {Action} from '@ngrx/store'
import { Ingredient } from 'app/shared/ingredient.model';





const initialState = {
  ingredients :  [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
}
export function shoppingListReducer(state = initialState, action: ShoppingListActions){
  switch(state.type){
    case ShoppingListActions.ADD_INGREDIENT :
    return  {
      ...state,
      ingredients: [ ...state.ingredients, action.payload]
    };
    default:
    return state;
  }

}


