import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "../models/recipe.model";
import { cloneDeep } from "lodash";
import { Ingredient } from "../models/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Injectable()
export class RecipeService {
    private _recipes: Recipe[] = [
        new Recipe(
            "Pasta",
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
            "A Big Fat Burger",
            "This is Simply a Test!",
            "https://www.chicken.ca/wp-content/uploads/2013/05/Moist-Chicken-Burgers-1180x580.jpg",
            [
                new Ingredient("Tomatoes", 4),
                new Ingredient("Potatoes", 6),
                new Ingredient("Bread", 1),
                new Ingredient("Garlic", 3),
            ]
        ),
        new Recipe(
            "Roasted Chiken",
            "This is Simply a Test!",
            "https://thecozycook.com/wp-content/uploads/2019/07/Ina-Garten-Roast-Chicken-Recipe.jpg",
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

    public getRecipesById(id: number) {
        return cloneDeep(this._recipes[id]);
    }

    constructor(private shoppingListService: ShoppingListService) {}

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}
