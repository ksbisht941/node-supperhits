import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'in', pathMatch: 'full' },
  {
    path: 'in',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'in/:content-type/:content',
    loadChildren: () => import('./modules/details/details.module').then(m => m.DetailsModule)
  },
  {
    path: 'in/movies',
    loadChildren: () => import('./modules/movies/movies.module').then(m => m.MoviesModule)
  },
  // {
  //   path: 'in/movies',
  //   loadChildren: () => import('./modules/movies/movies.module').then(m => m.MoviesModule)
  // },
  {
    path: '**', redirectTo: 'in', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
