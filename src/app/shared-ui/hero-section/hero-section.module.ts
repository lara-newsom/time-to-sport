import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImageModule } from '@angular/common';
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
    NgOptimizedImageModule
  ]
})
export class HeroSectionModule { }