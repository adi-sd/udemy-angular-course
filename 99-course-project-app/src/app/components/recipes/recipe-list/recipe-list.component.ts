import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Recipe } from "src/app/models/recipe.model";
import { RecipeService } from "src/app/services/recipe.service";

@Component({
    selector: "app-recipe-list",
    templateUrl: "./recipe-list.component.html",
    styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[];

    constructor(
        private recipesService: RecipeService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.recipes = this.recipesService.recipes;
    }

    onNewRecipe() {
        this.router.navigate(["new"], { relativeTo: this.route });
    }
}
