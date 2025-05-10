import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ROUTE_TOKENS } from '../../models/route-tokens';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { NgOptimizedImage, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss'],
    standalone: true,
    imports: [
    RouterLinkActive,
    RouterLink,
    NgOptimizedImage,
    AsyncPipe
],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideMenuComponent {
  private readonly productService = inject(ProductService);
  readonly products = this.productService.filteredProducts;
  readonly ROUTE_TOKENS = ROUTE_TOKENS;
}
