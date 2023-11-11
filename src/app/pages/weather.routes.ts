import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { TopWeatherPageComponent } from './top-weather-page/top-weather-page.component';
import { LwxWeatherPageComponent } from './lwx-weather-page/lwx-weather-page.component';

export const routes: Routes = [
  {
    path: 'LWX',
    component: LwxWeatherPageComponent,
  },
  {
    path: 'TOP',
    component: TopWeatherPageComponent,
  },
  {
    path: 'home',
    component: MainPageComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
