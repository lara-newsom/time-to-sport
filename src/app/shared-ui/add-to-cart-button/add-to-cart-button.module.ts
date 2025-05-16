import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddToCartButtonComponent } from './add-to-cart-button.component';
import { CustomButtonDirective } from '../custom-button.directive';

@NgModule({
    exports: [
        AddToCartButtonComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
        CustomButtonDirective,
        AddToCartButtonComponent,
    ],
})
export class AddToCartButtonModule { }