import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { BehaviorSubject } from 'rxjs';
import { map, switchMap, tap} from'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ProductHttpService } from './product-http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private selectedCategory = new BehaviorSubject<string>(Category.ALL);
  readonly selectedCategory$ = this.selectedCategory.asObservable();
  setSelectedCategory(category: string):void {
    this.selectedCategory.next(category)
  };

  private tableView = new BehaviorSubject(false);
  readonly tableView$ = this.tableView.asObservable();
  setTableView(next?: boolean){
    if(next === false) {
      return this.tableView.next(false);
    }
    if(next === true) {
      return this.tableView.next(true);
    }
    this.tableView.next(!this.tableView.getValue());
  }

  readonly products = this.productHttpService.httpGetProducts();

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
  );
  
  readonly selectedIdFromQueryParams = this.route.queryParamMap.pipe(
    map((queryParams) => queryParams.get('productId') || undefined),
    tap(() => this.setTableView(false))
  );

  readonly selectedProduct = this.selectedIdFromQueryParams.pipe(
    switchMap((selectedProductId) => {
      return this.filteredProducts.pipe(
        map((products) => {
          return products.find((product) => product.id === selectedProductId) || products[0];
        })
      )
    })
  );

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productHttpService: ProductHttpService
  ){
  }
}
