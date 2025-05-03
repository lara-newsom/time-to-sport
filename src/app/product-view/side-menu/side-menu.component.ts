import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ROUTE_TOKENS } from '../../models/route-tokens';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  private readonly productService = inject(ProductService);
  readonly products = this.productService.filteredProducts;
  readonly ROUTE_TOKENS = ROUTE_TOKENS;
}
