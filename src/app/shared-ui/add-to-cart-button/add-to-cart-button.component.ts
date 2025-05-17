import {
  Component,
  input,
  inject,
  booleanAttribute,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CustomButtonDirective } from '../custom-button.directive';

@Component({
  selector: 'app-add-to-cart-button',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.scss'],
  standalone: true,
  imports: [CustomButtonDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddToCartButtonComponent {
  private readonly cartService = inject(CartService);

  readonly productId = input.required<string>();
  readonly numberOnly = input(false, {
    transform: booleanAttribute,
  });

  readonly cartItems = this.cartService.cartItems;

  addToCart(productId: string): void {
    this.cartService.addCartItem(productId);
  }

  decrementFromCart(productId: string): void {
    this.cartService.decrementCartItem(productId);
  }

  readonly addToCartMessage = computed(() => {
    const total = this.cartItems()?.[this.productId()]?.quantity || 0;
    return total ? `Add one to the ${total} in the cart` : 'Add one to cart';
  });

  readonly buttonMessage = computed(() => {
    const total = this.cartItems()?.[this.productId()]?.quantity || 0;
    if (this.numberOnly()) {
      return total ? total : 0;
    }
    return total ? `${total} in cart` : 'Add to cart';
  });
}
