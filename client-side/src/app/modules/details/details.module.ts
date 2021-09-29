import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './components/details.component';
import { DetailsRoutingModule } from './details-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    SharedModule
  ]
})
export class DetailsModule { }
