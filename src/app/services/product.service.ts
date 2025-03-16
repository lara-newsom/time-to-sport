import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { BehaviorSubject, of } from 'rxjs';
import { map, switchMap, tap} from'rxjs/operators';
import { PRODUCTS } from '../models/product-data.mock';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private selectedCategory = new BehaviorSubject<string>(Category.ALL);
  readonly selectedCategory$ = this.selectedCategory.asObservable();
  setSelectedCategory(category: string):void {
    this.selectedCategory.next(category)
  };

  readonly selectedProductId = new BehaviorSubject<string | undefined>(undefined);
  readonly selectedProductId$ = this.selectedProductId.asObservable();
  setSelectedProductId(id?: string):void {
    this.selectedProductId.next(id)
  };


  private readonly products = new BehaviorSubject(PRODUCTS);
  readonly products$ = this.products.asObservable();

  readonly homeProducts = this.products.pipe(
    map((products) => {
      if(products.length > 0) {
            const middle = Math.floor(products.length / 2);
      
            return [products[0], products[middle], products[products.length - 1]];
          }
          return [];
    })
  );

  readonly filteredProducts = this.selectedCategory.pipe(
    switchMap((selectedCategory) => {
      return selectedCategory === Category.ALL
      ? this.products
      : this.products.pipe(
        map(
          (products) => {
            return products.filter((product) => product.category.toLowerCase() === selectedCategory.toLowerCase())
          }
        )
      )
    })
  )

  readonly selectedProduct = this.selectedProductId.pipe(
    switchMap((selectedProductId) => {
      return this.products.pipe(
        switchMap((products) => {
          const selected = products.find((product) => product.id === selectedProductId);
          return selected ? of(selected) : this.firstInCategory;
        })
      )
    })
  );

  readonly firstInCategory = this.filteredProducts.pipe(
    map((filteredProducts) => filteredProducts ? filteredProducts[0] : undefined
    )
  );

  constructor(route: ActivatedRoute){
    route.queryParamMap.pipe(tap((queryParams) => {
      if(queryParams.get('productId')) {
        this.setSelectedProductId(queryParams.get('productId') || '')
      }
    })).subscribe()
  }
}
