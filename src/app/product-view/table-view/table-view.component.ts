import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { BUSINESS_NAME } from 'src/app/constants';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

import { NgOptimizedImage, UpperCasePipe, CurrencyPipe } from '@angular/common';
import { AddToCartButtonComponent } from 'src/app/shared-ui/add-to-cart-button/add-to-cart-button.component';

type SortableKeys = Pick<
  Product,
  'description' | 'title' | 'category' | 'price'
>;

@Component({
    selector: 'app-table-view',
    templateUrl: './table-view.component.html',
    styleUrls: ['./table-view.component.scss'],
    imports: [
        NgOptimizedImage,
        UpperCasePipe,
        CurrencyPipe,
        AddToCartButtonComponent
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableViewComponent {
  readonly BUSINESS_NAME = BUSINESS_NAME;
  private readonly productService = inject(ProductService);

  readonly sortColumnProperty = signal< keyof SortableKeys | 'none'>('description');
  readonly filteredProducts = this.productService.filteredProducts;

  readonly products = computed(() => {
    if (this.sortColumnProperty() !== 'none' && this.filteredProducts()) {
      return this.filteredProducts()?.sort((a, b) =>
        this.compareFn(a, b, this.sortColumnProperty())
      );
    }
    return this.filteredProducts() || [];
  })

  compareFn(a: Product, b: Product, prop: keyof SortableKeys | 'none') {
    if (prop === 'none') {
      return 0;
    }
    if (a[prop]! < b[prop]!) {
      return -1;
    } else if (a > b) {
      return 1;
    }
    return 0;
  }

  sortColumn(property: keyof SortableKeys) {
    if (this.sortColumnProperty() === property) {
      this.sortColumnProperty.set('none');
    } else {
      this.sortColumnProperty.set(property);
    }
  }
}
