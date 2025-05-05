import { NgModule } from '@angular/core';
import { ProductViewComponent } from './product-view.component';
import { RouterModule } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PRODUCT_VIEW_ROUTES } from './product-view.routes';


import { DetailViewComponent } from './detail-view/detail-view.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
    exports: [
        ProductViewComponent,
        DetailViewComponent,
    ],
    imports: [
    CommonModule,
    RouterModule.forChild(PRODUCT_VIEW_ROUTES),
    DetailViewComponent,
    MatSlideToggleModule,
    NgOptimizedImage,
    ProductViewComponent
]
})
export class ProductViewModule {}