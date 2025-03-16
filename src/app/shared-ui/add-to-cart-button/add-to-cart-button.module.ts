import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddToCartButtonComponent } from './add-to-cart-button.component';

@NgModule({
    declarations: [
      AddToCartButtonComponent,
    ],
    exports: [
      AddToCartButtonComponent,
    ],
    imports: [
      RouterModule,
      CommonModule,
    ],
})
export class AddToCartButtonModule { }