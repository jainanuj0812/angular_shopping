import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { IngredientModel } from '../../shared/ingredient.model';
import { ShoppingListSerivce } from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
    @ViewChild('f') slForm: NgForm
    editIndex: number;
    editMode = false;
    editedItem: IngredientModel;
    editSubscription: Subscription;
    constructor(private shoppingListService: ShoppingListSerivce) { }

    ngOnInit() {
        this.editSubscription = this.shoppingListService.startedEditing
            .subscribe((index: number) => {
                this.editIndex = index;
                this.editMode = true;
                this.editedItem = this.shoppingListService.getIngredient(index);
                this.slForm.setValue({
                    name: this.editedItem.name,
                    amount: this.editedItem.amount
                })
            })
    }

    onSubmit(form: NgForm) {
        const value = form.value
        const Ing = new IngredientModel(value.name, value.amount);
        if (this.editMode) {
             this.shoppingListService.updateIngredient(this.editIndex, Ing);
        } else {
            this.shoppingListService.updateIngredients(Ing);
        }
        this.editMode = false;
        form.reset();
    }

    onClear() {
        this.slForm.reset();
        this.editMode = false;
    }

    onDelete() {
        this.shoppingListService.deleteIngredient(this.editIndex);
        this.onClear();
    }

    ngOnDestroy() {
        this.editSubscription.unsubscribe();
    }

}
