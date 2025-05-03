import { NgModule } from '@angular/core';
import { SubHeroLogoComponent } from './sub-hero-logo.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    NgOptimizedImage,
  ],
  declarations: [
    SubHeroLogoComponent,
  ],
  exports: [
    SubHeroLogoComponent,
  ],
})
export class SubHeroLogoModule { }