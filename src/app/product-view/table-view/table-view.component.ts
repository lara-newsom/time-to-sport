import { Component, signal, computed } from '@angular/core';
import { BUSINESS_NAME } from 'src/app/constants';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { AddToCartButtonComponent } from '../../shared-ui/add-to-cart-button/add-to-cart-button.component';
import { NgOptimizedImage, UpperCasePipe, CurrencyPipe } from '@angular/common';

type SortableKeys = Pick<Product, 'description' | 'title' | 'category' | 'price'  >;

@Component({
    selector: 'app-table-view',
    templateUrl: './table-view.component.html',
    styleUrls: ['./table-view.component.scss'],
    standalone: true,
    imports: [AddToCartButtonComponent, NgOptimizedImage, UpperCasePipe, CurrencyPipe]
})
export class TableViewComponent {
  readonly BUSINESS_NAME = BUSINESS_NAME;
  constructor(
    readonly productService: ProductService,
  ){}
  readonly sortColumnProperty = signal<keyof SortableKeys | 'none'>('description');

  readonly products = computed(() => {
    const sortColumnProperty = this.sortColumnProperty();
    const filteredProducts = this.productService.filteredProducts();
    if (sortColumnProperty !== 'none' && filteredProducts) {
      return [...filteredProducts].sort((a, b) => this.compareFn(a, b, sortColumnProperty));
    }
    return filteredProducts || [];
  });

  compareFn(a: Product, b: Product, prop: keyof SortableKeys) {
    if (a[prop]! < b[prop]!) {
      return -1;
    } else if (a[prop]! > b[prop]!) {
      return 1;
    }
    return 0;
  }
  
  sortColumn(property: keyof SortableKeys){
    if(this.sortColumnProperty() === property) {
      this.sortColumnProperty.set('none');
    } else {
      this.sortColumnProperty.set(property);
    }
  }
}
