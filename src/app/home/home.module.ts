import { NgModule } from '@angular/core';
import { FeaturedProductModule } from '../featured-product/featured-product.module';
import { RouterModule } from '@angular/router';
import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { SharedUiModule } from '../shared-ui/shared-ui.module';

export const HOME_ROUTES: Route[] = [
  {
    path: '',
    component: HomeComponent,
  }
]

@NgModule({
  imports: [
    FeaturedProductModule,
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