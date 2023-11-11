import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'LWX',
    loadComponent: () =>
      import('./lwx-weather-page/lwx-weather-page.component').then(
        (c) => c.LwxWeatherPageComponent
      ),
  },
  {
    path: 'TOP',
    loadComponent: () =>
      import('./top-weather-page/top-weather-page.component').then(
        (c) => c.TopWeatherPageComponent
      ),
  },
];
