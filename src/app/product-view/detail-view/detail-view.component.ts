import { Component, Input, inject } from '@angular/core';
import { CartService  } from '../../services/cart.service';
import { ProductService  } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss'],
})
export class DetailViewComponent {
  @Input() set productId(val: string) {
    this.productService.setSelectedProductId(val);
  }
  constructor(
    private readonly productService: ProductService,
    private readonly route: ActivatedRoute
  ){
    this.route.queryParams.subscribe((params) => console.log(params))
  }

  readonly selectedProduct$ = this.productService.selectedProduct;
}

