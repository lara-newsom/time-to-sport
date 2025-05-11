import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeaturedProductComponent } from './featured-product.component';

@NgModule({
  declarations: [
    FeaturedProductComponent
  ],
  exports: [
    FeaturedProductComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    NgOptimizedImage
  ],
})
export class FeaturedProductModule { }