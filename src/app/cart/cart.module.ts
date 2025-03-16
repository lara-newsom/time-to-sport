import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';
import { SharedUiModule } from '../shared-ui/shared-ui.module';

export const CART_ROUTES: Route[] = [
  {
    path: '',
    component: CartComponent,
  }
]

@NgModule({
  declarations: [
    CartComponent
  ],
  exports: [
    CartComponent
  ],
  imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(CART_ROUTES),
      SharedUiModule,
      MatProgressSpinnerModule,
    ],
  providers: [
  ],
})
export class CartModule { }