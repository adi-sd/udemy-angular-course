import { Component } from "@angular/core";
import { Ingredient } from "src/app/models/ingredient.model";

@Component({
    selector: "app-shopping-list",
    templateUrl: "./shopping-list.component.html",
    styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent {
    ingredients: Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Tomatoes", 4),
    ];

    onIngredientAdded(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
    }
}
