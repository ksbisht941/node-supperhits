import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { TrayAreaComponent } from './tray-area/tray-area.component';



@NgModule({
  declarations: [
    DetailPageComponent,
    TrayAreaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DetailPageComponent,
    TrayAreaComponent
  ]
})
export class SharedModule { }
