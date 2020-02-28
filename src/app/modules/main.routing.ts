import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'recipies',
        loadChildren: (async () => {
          const m = await import('./recipes/recipes.module');
          return m.RecipesModule;
        })
      },
      {
        path: '',
        redirectTo: 'recipies'
      }
    ]
  },
];

export const MainRouting = RouterModule.forChild(mainRoutes);

