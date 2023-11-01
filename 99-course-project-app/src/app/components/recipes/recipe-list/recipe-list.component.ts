import { Component } from "@angular/core";
import { Recipe } from "src/app/models/recipe.model";

@Component({
    selector: "app-recipe-list",
    templateUrl: "./recipe-list.component.html",
    styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent {
    recipes: Recipe[] = [
        new Recipe(
            "A Test Recipe",
            "This is Simply a Test!",
            "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=600,545"
        ),
        new Recipe(
            "A Test Recipe",
            "This is Simply a Test!",
            "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=600,545"
        ),
    ];
}
