import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FlockComponent } from './flock/flock.component';
import { CommonModule } from '@angular/common';
import { PhotoAeraComponent } from './photo-aera/photo-aera.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    FlockComponent,
    PhotoAeraComponent  
  ], 
  exports: [],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }