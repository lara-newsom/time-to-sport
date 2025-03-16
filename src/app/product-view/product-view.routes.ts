import { DetailViewComponent } from './detail-view/detail-view.component';
import { ProductViewComponent } from './product-view.component';
import { Route } from '@angular/router';

export const PRODUCT_VIEW_ROUTES: Route[] = [
  {
    path: ':categoryId',
    component: ProductViewComponent,
    children: [
      {
        path: '',
        component: DetailViewComponent,
      }
    ]
  }
]




