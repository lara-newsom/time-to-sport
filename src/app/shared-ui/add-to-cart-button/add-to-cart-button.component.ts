import { Component, Input } from '@angular/core';
import { CartService  } from '../../services/cart.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-to-cart-button',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.scss'],
})
export class AddToCartButtonComponent {
  constructor(
    private readonly cartService: CartService
  ){}
  @Input() productId: string = '';
  @Input() numberOnly: boolean = false;
  addToCart(productId: string): void {
    this.cartService.addCartItem(productId)
  }

  decrementFromCart(productId: string): void {
    this.cartService.decrementCartItem(productId)
  }

  readonly addToCartMessage = this.cartService.cartItems$.pipe(
    map((cartItems) => {
      const total = cartItems[this.productId]?.quantity || 0;

      return total ? `Add one to the ${total} in the cart`
      : 'Add one to cart';
    }))

    readonly buttonMessage = this.cartService.cartItems$.pipe(
      map((cartItems) => {
        const total = cartItems[this.productId]?.quantity || 0;

        if(this.numberOnly){
          return total ? total : 0;
        }
        return total
          ? `${total} in cart`
          : 'Add to cart';
      })
    );
}
