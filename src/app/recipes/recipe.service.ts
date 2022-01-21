import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>()
  // this information is now stored on firebase
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Test Soup',
  //     'Pretend soup, for testing purposes',
  //     'https://placekitten.com/200/200',
  //     [
  //       new Ingredient('Imagination', 42),
  //       new Ingredient('Broth', 2),
  //       new Ingredient('Unicorn Dust', 456)
  //     ]),
  //   new Recipe(
  //     'Test Omlette',
  //     'Pretend omlette, for testing purposes',
  //     'https://placekitten.com/250/250',
  //     [
  //       new Ingredient('Imagination', 18),
  //       new Ingredient('Eggs', 3)
  //     ])
  // ];

  private recipes: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();  //returns an exact copy of the recipe array, not the array itself
  }

  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }

  addIngredientsToList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
