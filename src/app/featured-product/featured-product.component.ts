import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ROUTE_TOKENS } from '../models/route-tokens';
import { NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    imports: [
        RouterLink,
        UpperCasePipe,
        NgOptimizedImage
    ],
    selector: 'app-featured-product',
    templateUrl: './featured-product.component.html',
    styleUrls: ['./shared-featured-product-styles.scss', './featured-product.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturedProductComponent {
  readonly ROUTE_TOKENS = ROUTE_TOKENS;
}
