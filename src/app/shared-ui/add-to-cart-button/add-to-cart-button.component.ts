import { Component, input, inject, computed } from '@angular/core';
import { CartService  } from '../../services/cart.service';
import { CustomButtonDirective } from '../custom-button.directive';
import { toSignal } from '@angular/core/rxjs-interop';

type CartItems = { [key: string]: { quantity: number } };

@Component({
    selector: 'app-add-to-cart-button',
    templateUrl: './add-to-cart-button.component.html',
    styleUrls: ['./add-to-cart-button.component.scss'],
    standalone: true,
    imports: [
        CustomButtonDirective
    ],
})
export class AddToCartButtonComponent {
  private readonly cartService = inject(CartService);
  productId = input.required<string>();
  numberOnly = input<boolean>(false);
  
  readonly addToCartMessage = computed(() => {
    const items = this.cartService.cartItems() ?? {};
    const total = items[this.productId()]?.quantity ?? 0;
    return items[this.productId()]?.quantity ? `Add one to the ${total} in the cart` : 'Add one to cart';
  });

  readonly buttonMessage = computed(() => {
    const items = this.cartService.cartItems() ?? {};
    const total = items[this.productId()]?.quantity ?? 0;

    if(this.numberOnly()) {
      return total ? total : 0;
    }
    return total
      ? `${total} in cart`
      : 'Add to cart';
  });

  addToCart(productId: string): void {
    this.cartService.addCartItem(productId);
  }

  decrementFromCart(productId: string): void {
    this.cartService.decrementCartItem(productId);
  }
}
