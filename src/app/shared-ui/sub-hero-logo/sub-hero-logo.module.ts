import { NgModule } from '@angular/core';
import { SubHeroLogoComponent } from './sub-hero-logo.component';
import { CommonModule, NgOptimizedImageModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    NgOptimizedImageModule
  ],
  declarations: [
    SubHeroLogoComponent,
  ],
  exports: [
    SubHeroLogoComponent,
  ],
})
export class SubHeroLogoModule { }