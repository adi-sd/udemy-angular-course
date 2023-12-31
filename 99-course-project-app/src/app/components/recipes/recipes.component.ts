import { Component, OnInit } from "@angular/core";
import { Recipe } from "src/app/models/recipe.model";
import { RecipeService } from "src/app/services/recipe.service";

@Component({
    selector: "app-recipes",
    templateUrl: "./recipes.component.html",
    styleUrls: ["./recipes.component.css"],
    providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
    selectedRecipe: Recipe;

    constructor(private recipeService: RecipeService) {}

    ngOnInit(): void {
        this.recipeService.recipeSelectedEventEmitter.subscribe(
            (recipe: Recipe) => {
                this.selectedRecipe = recipe;
            }
        );
    }
}
