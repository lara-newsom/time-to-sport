import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';;
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddToCartButtonModule } from '../add-to-cart-button/add-to-cart-button.module';

@NgModule({
    declarations: [
      CardComponent,
    ],
    exports: [
      CardComponent,
    ],
    imports: [
      RouterModule,
      CommonModule,
      AddToCartButtonModule,
    ],
})
export class CardModule { }