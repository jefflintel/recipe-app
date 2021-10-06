import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Soup', 'Pretend soup, for testing purposes', 'https://placekitten.com/200/200'),
    new Recipe('Test Omlette', 'Pretend omlette, for testing purposes', 'https://placekitten.com/250/250')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
