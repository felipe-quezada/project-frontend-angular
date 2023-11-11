import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
  {
    path: 'weather',
    component: HomePageComponent,
    loadChildren: () => import('./pages/weather.routes').then((c) => c.routes),
  },
  {
    path: '**',
    redirectTo: 'weather',
  },
];
