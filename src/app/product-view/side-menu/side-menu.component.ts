import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ROUTE_TOKENS } from '../../models/route-tokens';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  constructor(private readonly productService: ProductService){}

  readonly products = this.productService.filteredProducts.pipe(
  );
  readonly ROUTE_TOKENS = ROUTE_TOKENS;
}
