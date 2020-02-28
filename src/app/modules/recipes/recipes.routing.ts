import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './views/recipe-list/recipe-list.component';
import { RecipeFormComponent } from './views/recipe-form/recipe-form.component';


const recipesRoutes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    children: [
      {
        path: 'recipie-list',
        component: RecipeListComponent
      },
      {
        path: 'recipie-form',
        component: RecipeFormComponent
      },
      // {
      //   path: ':id',
      //   component: RecipeFormComponent
      // },
      // {
      //   path: '',
      //   redirectTo: 'recipie-list'
      // }
    ]
  },

];

export const RecipesRouting = RouterModule.forChild(recipesRoutes);
