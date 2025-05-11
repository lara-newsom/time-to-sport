import { Routes } from '@angular/router';
import { ROUTE_TOKENS } from './models/route-tokens';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTE_TOKENS.home,
    pathMatch: 'full',
    title: 'Time to Sport - Home',
  },
  {
    path: ROUTE_TOKENS.home,
    loadChildren: () => import ('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: ROUTE_TOKENS.products,
    loadChildren: () => import('./product-view/product-view.module').then(m => m.ProductViewModule),
    title: 'Time to Sport - Products',
  },
  {
    path: ROUTE_TOKENS.contact,
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
    title: 'Time to Sport - Contact',
  },
  {
    path: ROUTE_TOKENS.cart,
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule),
    title: 'Time to Sport - Cart',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Time to Sport - Not Found',
  },
];
