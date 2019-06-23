import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://img.taste.com.au/ITgbQUXM/w643-h428-cfill-q90/taste/2016/11/butter-chicken-with-naan-81484-1.jpeg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://assets.bonappetit.com/photos/59148a8d54d3034466bd4bd5/16:9/w_400%2Cc_limit/summer-squash-and-basil-pasta.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
