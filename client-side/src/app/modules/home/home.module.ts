import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MastheadAreaComponent } from './components/masthead-area/masthead-area.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    HomeComponent,
    MastheadAreaComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    SlickCarouselModule
  ]
})
export class HomeModule { }
