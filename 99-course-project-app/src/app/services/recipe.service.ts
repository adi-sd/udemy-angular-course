import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "../models/recipe.model";
import { cloneDeep } from "lodash";
import { Ingredient } from "../models/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Injectable()
export class RecipeService {
    private _recipes: Recipe[] = [
        new Recipe(
            "A Test Recipe",
            "This is Simply a Test!",
            "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=600,545",
            [
                new Ingredient("Tomatoes", 4),
                new Ingredient("Potatoes", 6),
                new Ingredient("Bread", 1),
                new Ingredient("Garlic", 3),
            ]
        ),
        new Recipe(
            "A Test Recipe",
            "This is Simply a Test!",
            "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=600,545",
            [
                new Ingredient("Tomatoes", 4),
                new Ingredient("Potatoes", 6),
                new Ingredient("Bread", 1),
                new Ingredient("Garlic", 3),
            ]
        ),
        new Recipe(
            "A Test Recipe",
            "This is Simply a Test!",
            "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=600,545",
            [
                new Ingredient("Tomatoes", 4),
                new Ingredient("Potatoes", 6),
                new Ingredient("Bread", 1),
                new Ingredient("Garlic", 3),
            ]
        ),
    ];

    public get recipes() {
        return cloneDeep(this._recipes);
    }

    private _recipeSelected = new EventEmitter<Recipe>();

    public get recipeSelectedEventEmitter() {
        return this._recipeSelected;
    }

    constructor(private shoppingListService: ShoppingListService) {}

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}
