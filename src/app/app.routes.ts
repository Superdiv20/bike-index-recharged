import { Routes } from '@angular/router';
import { GlobalSearch } from './pages/global-search/global-search';
import { Marketplace } from './pages/marketplace/marketplace';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'search',
    loadComponent: () => import('./pages/global-search/global-search').then((m) => m.GlobalSearch),
  },
  {
    path: 'marketplace',
    loadComponent: () => import('./pages/marketplace/marketplace').then((m) => m.Marketplace),
  },
];
