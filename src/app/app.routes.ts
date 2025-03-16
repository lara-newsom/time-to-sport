import { Routes } from '@angular/router';
import { ROUTE_TOKENS } from './models/route-tokens';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTE_TOKENS.home,
    pathMatch: 'full',
  },
  {
    path: ROUTE_TOKENS.home,
    loadChildren: () => import ('./home/home.module').then(m => m.HomeModule)
   // title: `${BUSINESS_NAME} - Home`,
  },
  {
    path: ROUTE_TOKENS.products,
    loadChildren: () => import('./product-view/product-view.module').then(m => m.ProductViewModule),
    //title: `${BUSINESS_NAME} - Products`,
  },
  {
    path: ROUTE_TOKENS.contact,
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
    //title: `${BUSINESS_NAME} - Contact`,
  },
  {
    path: ROUTE_TOKENS.cart,
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule),
   // title: `${BUSINESS_NAME} - Cart`,
  },
  {
    path: '**',
    component: NotFoundComponent,
    //title: `${BUSINESS_NAME} - Page Not Found`,
  },
];
