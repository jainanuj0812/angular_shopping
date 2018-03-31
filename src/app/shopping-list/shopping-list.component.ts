import { Component, OnInit, OnDestroy } from '@angular/core';
import { IngredientModel } from '../shared/ingredient.model';
import { ShoppingListSerivce } from './shopping-list.service';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

    ingredients: IngredientModel[];
    ingChangedSubscriber: Subscription
    constructor(private shoppingListSerivce: ShoppingListSerivce) { }

    ngOnInit() {
        this.ingredients = this.shoppingListSerivce.getIngredients();
        this.ingChangedSubscriber = this.shoppingListSerivce.ingredientsChanged
            .subscribe((ing: IngredientModel[]) => {
                this.ingredients = ing;
        })
    }

    onEdit(index: number) {
        this.shoppingListSerivce.startedEditing.next(index);
    }

    ngOnDestroy(){
        this.ingChangedSubscriber.unsubscribe();
    }
}
