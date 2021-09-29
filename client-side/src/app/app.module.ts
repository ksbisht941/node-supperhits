import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS, ScrollHooks } from 'ng-lazyload-image';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './includes/main-header/main-header.component';
import { MainFooterComponent } from './includes/main-footer/main-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadImageModule,
  ],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }], // <-- Declare that you want to use ScrollHook
  bootstrap: [AppComponent]
})
export class AppModule { }
