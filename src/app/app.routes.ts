import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'blog',
    loadComponent: () => import('./blog/blog.component').then(m => m.BlogComponent),
  },
  {
    path: 'plan',
    loadComponent: () => import('./plan/plan.component').then(m => m.PlanComponent),
  },
  {
    path: 'user',
    loadComponent: () => import('./user/user.component').then(m => m.UserComponent),
  },
];
