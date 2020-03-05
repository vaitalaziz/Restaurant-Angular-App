import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { CrudService } from '../core/services/crud.service';
import { ApiService } from '../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class RecipeService extends CrudService<Recipe> {
  constructor(
    protected apiService: ApiService
  ) {
    // super(apiService, 'api/post');
    super(apiService, 'v1/recipes');
  }
}
