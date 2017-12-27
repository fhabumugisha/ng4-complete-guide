import { Ingredient } from 'app/shared/ingredient.model';

import * as ShoppingListActions from './shopping-list.actions';


export interface AppState {
  shoppingList: State;
}

export interface State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number
}

const initialState: State = {
  ingredients :  [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 11),
  ],
  editedIngredient: null,
  editedIngredientIndex: -1
};

export function shoppingListReducer(state = initialState,
                                    action: ShoppingListActions.ShoppingListActions) {
  switch(action.type){
    case ShoppingListActions.ADD_INGREDIENT :
    return  {
      ...state,
      ingredients: [ ...state.ingredients, action.payload]
    };
    case ShoppingListActions.ADD_INGREDIENTS :
    return  {
      ...state,
      ingredients: [ ...state.ingredients, ...action.payload]
    };
    case ShoppingListActions.UPDATE_INGREDIENT :
    const ingredient = state.ingredients[state.editedIngredientIndex];
    const updatedIngredient = {
      ...ingredient,
      ...action.payload.ingredient
    }
    const ingredients =  [...state.ingredients];
    ingredients[state.editedIngredientIndex] = updatedIngredient;
    return  {
      ...state,
      ingredients: ingredients
    };
    case ShoppingListActions.DELETE_INGREDIENT:
    const oldIngredients =  [...state.ingredients];
    oldIngredients.splice(state.editedIngredientIndex, 1);
    return  {
      ...state,
      ingredients: oldIngredients
    };
     case ShoppingListActions.GET_INGREDIENT :
     const editedIngredient = {...state.ingredients[action.payload]};
    return  {
      ...state,
      editedIngredient : editedIngredient,
      editedIngredientIndex : action.payload
    };
    default:
    return state;
  }

}


