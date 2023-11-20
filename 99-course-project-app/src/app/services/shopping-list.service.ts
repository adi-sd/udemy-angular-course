import { EventEmitter } from "@angular/core";
import { Ingredient } from "../models/ingredient.model";
import { cloneDeep } from "lodash";

export class ShoppingListService {
    private _ingredients: Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Tomatoes", 4),
    ];

    private _ingredientsChanged = new EventEmitter<Ingredient[]>();

    public get ingredients() {
        return cloneDeep(this._ingredients);
    }

    public get ingredientsChangedEventEmitter() {
        return this._ingredientsChanged;
    }

    constructor() {}

    addIngredient(ingredient: Ingredient) {
        this._ingredients.push(ingredient);
        this.ingredientsChangedEventEmitter.emit(this.ingredients);
    }

    addIngredients(ingredients: Ingredient[]) {
        this._ingredients.push(...ingredients);
        this.ingredientsChangedEventEmitter.emit(this.ingredients);
    }
}
