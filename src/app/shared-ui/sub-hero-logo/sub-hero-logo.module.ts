import { NgModule } from '@angular/core';
import { SubHeroLogoComponent } from './sub-hero-logo.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SubHeroLogoComponent,
  ],
  exports: [
    SubHeroLogoComponent
  ],
})
export class SubHeroLogoModule { }