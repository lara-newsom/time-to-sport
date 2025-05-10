import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ROUTE_TOKENS } from '../../models/route-tokens';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss'],
    standalone: true,
    imports: [
    RouterLinkActive,
    RouterLink,
    NgOptimizedImage,
],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideMenuComponent {
  protected readonly productService = inject(ProductService);
  readonly ROUTE_TOKENS = ROUTE_TOKENS;
}
