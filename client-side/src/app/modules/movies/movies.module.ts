import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './components/movies.component';
import { MovieRoutingModule } from './movies-routing.module';


@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
  ]
})
export class MoviesModule { }
