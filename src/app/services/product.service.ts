import { Injectable, computed, inject, signal } from '@angular/core';
import { Category } from '../models/category';
import { map, tap} from'rxjs/operators';
import { PRODUCTS } from '../models/product-data.mock';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly route = inject(ActivatedRoute);

  readonly selectedCategory = signal<string>(Category.ALL);

  setSelectedCategory(category: string):void {
    this.selectedCategory.set(category)
  };

  readonly tableView = signal<boolean>(false);
  setTableView(next?: boolean) {
    if (next === false) {
      return this.tableView.set(false);
    }
    if (next === true) {
      return this.tableView.set(true);
    }
    this.tableView.set(!this.tableView());
  };

  readonly products = signal<Product[]>(PRODUCTS);

  readonly homeProducts = computed(() => {
    const products = this.products();
    if (products.length > 0) {
      const middle = Math.floor(products.length / 2);
      return [products[0], products[middle], products[products.length - 1]];
    }
    return [];
  });

  readonly filteredProducts = computed(() => {
    if (this.selectedCategory() === Category.ALL) {
      return this.products();
    }
    return this.products().filter((product) => product.category.toLowerCase() === this.selectedCategory().toLowerCase());
  });

  
  readonly selectedIdFromQueryParams = toSignal(this.route.queryParamMap.pipe(
    map((queryParams) => queryParams.get('productId') || undefined),
    tap(() => this.setTableView(false))
  ));

  readonly selectedProduct = computed(() => {
    if (this.selectedIdFromQueryParams()) {
      return this.products().find((product) => product.id === this.selectedIdFromQueryParams()) || this.products()[0];
    }
    return this.products()[0];
  });
}
