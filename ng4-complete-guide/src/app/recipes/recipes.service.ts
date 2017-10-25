import {Injectable } from '@angular/core';
import { ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipesService {

    constructor(private shoppingListService: ShoppingListService) {}

}
