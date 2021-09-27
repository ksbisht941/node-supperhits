import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'in', pathMatch: 'full' },
  {
    path: 'in',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'in/movies',
    loadChildren: () => import('./modules/movies/movies.module').then(m => m.MoviesModule)
  },
  // {
  //   path: 'in/movies',
  //   loadChildren: () => import('./modules/movies/movies.module').then(m => m.MoviesModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
