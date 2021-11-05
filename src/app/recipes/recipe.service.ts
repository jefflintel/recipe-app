import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test Soup',
      'Pretend soup, for testing purposes',
      'https://placekitten.com/200/200',
      [
        new Ingredient('Imagination', 42),
        new Ingredient('Broth', 2),
        new Ingredient('Unicorn Dust', 456)
      ]),
    new Recipe(
      'Test Omlette',
      'Pretend omlette, for testing purposes',
      'https://placekitten.com/250/250',
      [
        new Ingredient('Imagination', 18),
        new Ingredient('Eggs', 3)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();  //returns an exact copy of the recipe array, not the array itself
  }

  addIngredientsToList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
