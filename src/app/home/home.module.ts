import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { SharedUiModule } from '../shared-ui/shared-ui.module';
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
    SharedUiModule,
    RouterModule.forChild(HOME_ROUTES)
  ],
  declarations: [
    HomeComponent,
  ],
  exports: [
    HomeComponent
  ],
})
export class HomeModule { }