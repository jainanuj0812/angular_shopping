import { IngredientModel } from "../shared/ingredient.model";
import { Subject } from "rxjs/Subject";

export class ShoppingListSerivce {

    ingredientsChanged = new Subject<IngredientModel[]>();
    startedEditing = new Subject<number>();
    private ingredients: IngredientModel[] = [
        new IngredientModel('Apples', 5),
        new IngredientModel('Tomatoes', 10),
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients.slice()[index];
    }

    updateIngredients(newIng: IngredientModel) {
        this.ingredients.push(newIng);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIng: IngredientModel) {
        this.ingredients[index] = newIng;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: IngredientModel[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}