import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeFormComponent } from './views/recipe-form/recipe-form.component';
import { RecipeListComponent } from './views/recipe-list/recipe-list.component';
import { RecipesRouting } from './recipes.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';
import { RecipesComponent } from './recipes.component';


@NgModule({
  declarations: [RecipesComponent, RecipeFormComponent, RecipeListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRouting,
    MaterialModule
  ]
})
export class RecipesModule { }
