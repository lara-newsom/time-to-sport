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
    loadComponent: () => import ('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: ROUTE_TOKENS.products,
    loadChildren: () => import('./product-view/product-view.routes').then(m => m.PRODUCT_VIEW_ROUTES),
    title: 'Time to Sport - Products',
  },
  {
    path: ROUTE_TOKENS.contact,
    loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent),
    title: 'Time to Sport - Contact',
  },
  {
    path: ROUTE_TOKENS.cart,
    loadComponent: () => import('./cart/cart.component').then(m => m.CartComponent),
    title: 'Time to Sport - Cart',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Time to Sport - Not Found',
  },
];
