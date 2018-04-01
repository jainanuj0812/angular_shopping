import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {RecipeService} from "../recipes/recipe.service";
import {RecipeModel} from "../recipes/recipe.model";
import {AuthService} from "../auth/auth.service";
import 'rxjs/add/operator/map';

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService){}

    saveData() {
        const token = this.authService.getToken();
        return this.http.put('https://ng-recipe-book-f562f.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
    }

    fetchData() {
        const token = this.authService.getToken();
        this.http.get('https://ng-recipe-book-f562f.firebaseio.com/recipes.json?auth=' + token)
            .map((res: Response) => {
                const recipes: RecipeModel[] = res.json();
                for (let recipe of recipes) {
                    if(!recipe['ingredients']) {
                        recipe['ingredients'] = [];
                    }
                }
                return recipes
            })
            .subscribe((recipes: RecipeModel[]) => {
                this.recipeService.setRecipes(recipes);
            })
    }
}