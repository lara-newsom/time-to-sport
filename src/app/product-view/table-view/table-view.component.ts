import { Component, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { BUSINESS_NAME } from 'src/app/constants';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

type SortableKeys = Pick<Product, 'description' | 'title' | 'category' | 'price'  >;

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent {
  readonly BUSINESS_NAME = BUSINESS_NAME;
  private readonly productService = inject(ProductService);
  
  readonly sortColumnProperty$ = new BehaviorSubject<keyof SortableKeys | 'none'>('description');

  readonly products = this.sortColumnProperty$.pipe(
    switchMap((sortColumnProperty) => this.productService.filteredProducts.pipe(
      map((filteredProducts) => {
        if(sortColumnProperty !== 'none' && filteredProducts) {
          return filteredProducts.sort((a, b) => this.compareFn(a, b, sortColumnProperty))
        }
        return filteredProducts || [];
      })
    ))
  )

  compareFn(a: Product, b: Product, prop: keyof SortableKeys) {
    if (a[prop]! < b[prop]!) {
      return -1;
    } else if (a > b) {
      return 1;
    }
    return 0;
  }
  
  sortColumn(property: keyof SortableKeys){
    if(this.sortColumnProperty$.getValue() === property) {
      this.sortColumnProperty$.next('none');
    } else {
      this.sortColumnProperty$.next(property)
    }
  }
}
