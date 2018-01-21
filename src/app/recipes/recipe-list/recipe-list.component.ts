import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: RecipeModel[] = [
    new RecipeModel('A test Recipe', 'A test', 'https://www.ndtv.com/cooks/images/kerala.chicken.roast%20%281%29.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}