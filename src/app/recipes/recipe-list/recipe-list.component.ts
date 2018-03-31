import {Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import {RecipeService} from "../recipe.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    recipes: RecipeModel[];

    constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.recipeService.recipeChanged
            .subscribe((recipes: RecipeModel[]) => {
                this.recipes = recipes;
            });
        this.recipes = this.recipeService.getRecipes();
    }

    goToNewRecipe() {
        this.router.navigate(['new'], { relativeTo: this.route });
    }

}
