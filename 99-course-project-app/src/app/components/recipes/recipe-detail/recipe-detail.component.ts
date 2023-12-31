import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Recipe } from "src/app/models/recipe.model";
import { RecipeService } from "src/app/services/recipe.service";

@Component({
    selector: "app-recipe-detail",
    templateUrl: "./recipe-detail.component.html",
    styleUrls: ["./recipe-detail.component.css"],
})
export class RecipeDetailComponent implements OnInit {
    recipe: Recipe;
    id: number;

    constructor(
        private recipeService: RecipeService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.id = +params["id"];
            this.recipe = this.recipeService.getRecipesById(this.id);
        });
    }

    onAddToShoppingList() {
        this.recipeService.addIngredientsToShoppingList(
            this.recipe.ingredients
        );
    }

    onEditRecipe() {
        this.router.navigate(["edit"], { relativeTo: this.route });
    }
}
