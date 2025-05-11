import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HeroSectionComponent } from './hero-section.component';

@NgModule({
  declarations: [
    HeroSectionComponent
  ],
  exports: [
    HeroSectionComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ]
})
export class HeroSectionModule { }