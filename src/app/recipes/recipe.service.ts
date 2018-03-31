import { RecipeModel } from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {IngredientModel} from "../shared/ingredient.model";
import {ShoppingListSerivce} from "../shopping-list/shopping-list.service";


@Injectable()
export class RecipeService {

    private recipes: RecipeModel[] = [
        new RecipeModel('THE BEST EASY BEEF AND BROCCOLI STIR-FRY',
            'This recipe easily rivals the beef & broccoli found at ANY local Chinese restaurant. So delicious',
            'http://img.sndimg.com/food/image/upload/w_644,h_362,fl_progressive,c_fill,q_80/v1/img/recipes/99/47/6/j7L11nRQNeKACth1WJkg_easy-beef-broccoli-stir-fry-6106.jpg',
            [
                new IngredientModel('Cornstarch', 3),
                new IngredientModel('Broccoli', 4)
                ]),
        new RecipeModel('EASY STOVE-TOP MACARONI & CHEESE',
            'An easy way to do macaroni and cheese when there is little time until dinner.',
            'http://img.sndimg.com/food/image/upload/w_644,h_362,fl_progressive,c_fill,q_80/v1/img/recipes/60/35/0/JWYBZJMdS2uM1SwQaI7Q_stovetop-macaroni-cheese-8831.jpg',
            [
                new IngredientModel('Marconni', 16),
                new IngredientModel('Cheese', 2)
            ]),

    ];

    constructor(private shoppingListSerivce: ShoppingListSerivce) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes.slice()[index];
    }

    addIngredientsToShoppingList(ings: IngredientModel[]) {
        this.shoppingListSerivce.addIngredients(ings);
    }
}