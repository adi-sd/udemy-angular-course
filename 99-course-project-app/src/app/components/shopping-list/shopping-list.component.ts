import { Component, OnInit } from "@angular/core";
import { Ingredient } from "src/app/models/ingredient.model";
import { ShoppingListService } from "src/app/services/shopping-list.service";

@Component({
    selector: "app-shopping-list",
    templateUrl: "./shopping-list.component.html",
    styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[];

    constructor(private shoppingListService: ShoppingListService) {}

    ngOnInit(): void {
        this.ingredients = this.shoppingListService.ingredients;
        this.shoppingListService.ingredientsChangedEventEmitter.subscribe(
            (ingredients: Ingredient[]) => {
                this.ingredients = ingredients;
            }
        );
    }
}
