import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Route } from '@angular/router';
import { HomeComponent } from './home.component';

import { FeaturedProductComponent } from '../featured-product/featured-product.component';

export const HOME_ROUTES: Route[] = [
  {
    path: '',
    component: HomeComponent,
  }
]

@NgModule({
    imports: [
    FeaturedProductComponent,
    RouterModule.forChild(HOME_ROUTES),
    HomeComponent
],
    exports: [
        HomeComponent
    ],
})
export class HomeModule { }