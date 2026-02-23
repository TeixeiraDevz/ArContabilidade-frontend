import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./app/features/home/pages/home/home').then(m => m.Home) },
  { path: 'planos', loadComponent: () => import('./app/features/planos/pages/planos/planos').then(m => m.Planos) },
  { path: '**', redirectTo: '' }
];
