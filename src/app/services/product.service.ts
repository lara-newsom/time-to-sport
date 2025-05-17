import { Injectable, inject, signal, computed } from '@angular/core';
import { Category } from '../models/category';
import { map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ProductHttpService } from './product-http.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly route = inject(ActivatedRoute);
  private readonly productHttpService = inject(ProductHttpService);

  readonly selectedCategory = signal<string>(Category.ALL);
  setSelectedCategory(category: string): void {
    this.selectedCategory.set(category);
  }

  readonly tableView = signal<boolean>(false);
  setTableView(next?: boolean) {
    if (next === false) {
      this.tableView.set(false);
      return;
    }
    if (next === true) {
      this.tableView.set(true);
      return;
    }
    this.tableView.set(!this.tableView());
  }

  readonly products = toSignal(this.productHttpService.httpGetProducts());

  readonly homeProducts = computed(() => {
    const products = this.products();
    if (products && products.length > 0) {
      const middle = Math.floor(products.length / 2);
      return [products[0], products[middle], products[products.length - 1]];
    }
    return [];
  });

  readonly filteredProducts = computed(() => {
    const products = this.products();
    if (!products) {
      return [];
    }
    if (this.selectedCategory() === Category.ALL) {
      return products;
    }
    return products.filter(
      (product) =>
        product.category.toLowerCase() === this.selectedCategory().toLowerCase()
    );
  });

  readonly selectedIdFromQueryParams = toSignal(
    this.route.queryParamMap.pipe(
      map((params) => params.get('productId') || undefined),
      tap(() => this.setTableView(false))
    )
  );

  readonly selectedProduct = computed(() => {
    const selectedProductId = this.selectedIdFromQueryParams();
    const products = this.filteredProducts();

    return products.find((p) => p.id === selectedProductId) || products[0];
  });
}
