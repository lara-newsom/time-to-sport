import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './hero-section.component';

@NgModule({
  declarations: [
    HeroSectionComponent
  ],
  exports: [
    HeroSectionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroSectionModule { }