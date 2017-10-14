import {Ingredient} from '../shopping-list/Ingredient';
export class Recipe{
    id: number;
    name: string;
    description: string;
    imagePath : string;
    ingredients: Ingredient[];
    constructor ( name: string, desc: string, imagePath: string){
        this.name = name;
        this.description = desc;
        this.imagePath =  imagePath;
    }
}