import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: " ", redirectTo: "ebook/welcome", pathMatch: 'full'},   // " " ou ' '
   
    /** ultima rota */
    {path: '**',loadComponent: () => import('./pages/welcome/welcome').then(c => c.Welcome)},
];
