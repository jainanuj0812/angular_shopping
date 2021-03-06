import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";

import { RecipeService } from "../recipe.service";
import { RecipeModel } from "../recipe.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

    recipe: RecipeModel;
    id: number;
    constructor(private recipeService: RecipeService, private route: ActivatedRoute,
        private router: Router) {

    }

    ngOnInit() {
        this.route.params
            .subscribe((params: Params) => {
                this.id = +params['id'];
                this.recipe = this.recipeService.getRecipe(this.id);
            })
    }

    addIngToSL() {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }

    onDeleteRecipe() {
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['/recipes']);
    }

}
