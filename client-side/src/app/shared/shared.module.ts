import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrayAreaComponent } from './tray-area/tray-area.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
    TrayAreaComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule
  ],
  exports: [
    TrayAreaComponent
  ]
})
export class SharedModule { }
