import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layout/external/pages/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./layout/external/pages/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./layout/internal/pages/dashboard/dashboard.module').then(m => m.DashboardModule),
  }
];
