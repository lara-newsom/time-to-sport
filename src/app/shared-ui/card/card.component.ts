import { Component, input } from '@angular/core';
import { Product } from '../../models/product';
import { ROUTE_TOKENS } from '../../models/route-tokens';
import { AddToCartButtonComponent } from '../add-to-cart-button/add-to-cart-button.component';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage, CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    standalone: true,
    imports: [NgOptimizedImage, RouterLink, AddToCartButtonComponent, CurrencyPipe]
})
export class CardComponent {
  readonly product = input.required<Product>()
  readonly ROUTE_TOKENS = ROUTE_TOKENS;
}
