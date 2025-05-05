import { Component, Input, inject } from '@angular/core';
import { CartService  } from '../../services/cart.service';
import { map, switchMap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { CustomButtonDirective } from '../custom-button.directive';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-add-to-cart-button',
    templateUrl: './add-to-cart-button.component.html',
    styleUrls: ['./add-to-cart-button.component.scss'],
    standalone: true,
    imports: [
    CustomButtonDirective,
    AsyncPipe
],
})
export class AddToCartButtonComponent {
  private readonly cartService = inject(CartService);
  productId$ = new BehaviorSubject('');
  
  @Input() set productId(val: string) {
    this.productId$.next(val);
  }
  @Input() numberOnly: boolean = false;

  addToCart(productId: string): void {
    this.cartService.addCartItem(productId);
  }

  decrementFromCart(productId: string): void {
    this.cartService.decrementCartItem(productId);
  }

  readonly addToCartMessage = this.cartService.cartItems$.pipe(
    switchMap((cartItems) => this.productId$.pipe(
      map((productId) => {
        const total = cartItems[productId]?.quantity || 0;
  
        return total ? `Add one to the ${total} in the cart`
        : 'Add one to cart';
      }))
    ));

  readonly buttonMessage = this.cartService.cartItems$.pipe(
    switchMap((cartItems) => this.productId$.pipe(
      map((productId) => {
        const total = cartItems[productId]?.quantity || 0;
  
        if(this.numberOnly){
          return total ? total : 0;
        }
        return total
          ? `${total} in cart`
          : 'Add to cart';
      })
    ))
  );
}
