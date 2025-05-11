import { Injectable, inject } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from '../models/product';
import { BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CartHttpService } from './cart-http.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<{
    [key: string]: { quantity: number };
  }>({});
  readonly cartItems$ = this.cartItems.asObservable();

  setCartItems(items: { [key: string]: { quantity: number } }): void {
    this.cartItems.next(items);
  }

  constructor() {
    // Initialize cart items from HTTP service
    this.cartHttpService.getCartItems().subscribe((cartItems) => {
      this.cartItems.next(cartItems);
    });
  }

  private readonly productService = inject(ProductService);
  private readonly cartHttpService = inject(CartHttpService);

  readonly cartItemsPlusQuantity = this.cartItems.pipe(
    switchMap((cartItems) =>
      this.productService.products.pipe(
        map((products) => {
          return Object.keys(cartItems).reduce((acc, key) => {
            const product = products.find((product) => product.id === key);

            if (product) {
              acc.push({
                ...product,
                quantity: cartItems[key].quantity,
              });
            }

            return acc;
          }, [] as Product[]);
        })
      )
    )
  );

  readonly selectedItemPlusQuantity = this.productService.selectedProduct.pipe(
    switchMap((selectedProduct) =>
      this.cartItems.pipe(
        map((cartItems) => {
          const quantity = cartItems[selectedProduct?.id]?.quantity || 0;
          return {
            ...selectedProduct,
            quantity,
          };
        })
      )
    )
  );

  readonly featuredProductsPlusQuantity = this.cartItems.pipe(
    switchMap((cartItems) =>
      this.productService.homeProducts.pipe(
        map((homeProducts) => {
          return homeProducts.map((product) => ({
            ...product,
            quantity: cartItems[product.id]?.quantity || 0,
          }));
        })
      )
    )
  );

  readonly cartTotals = this.cartItems.pipe(
    switchMap((cartItems) =>
      this.productService.products.pipe(
        map((products) => {
          return Object.keys(cartItems).reduce((acc, key) => {
            const product = products.find((product) => product.id === key);

            if (product) {
              return acc + (cartItems[key].quantity || 0) * product.price;
            }

            return acc;
          }, 0);
        }),
        map((subtotal) => ({
          subtotal,
          salesTax: subtotal * 0.0625,
          shipping: subtotal * 0.05,
          total: subtotal + subtotal * 0.0625 + subtotal * 0.05,
        }))
      )
    )
  );

  readonly totalItems = this.cartItems.pipe(
    switchMap((cartItems) =>
      this.productService.products.pipe(
        map((products) => {
          return Object.keys(cartItems).reduce((acc, key) => {
            const product = products.find((product) => product.id === key);

            if (product) {
              return acc + cartItems[key].quantity || 0;
            }

            return acc;
          }, 0);
        })
      )
    )
  );

  addCartItem(id?: string) {
    if (id) {
      const cartItems = this.cartItems.getValue();
      this.cartItems.next({
        ...cartItems,
        [id]: {
          quantity: cartItems[id]?.quantity ? cartItems[id].quantity + 1 : 1,
        },
      });
    }
  }

  decrementCartItem(id?: string) {
    if (id) {
      const cartItems = this.cartItems.getValue();
      const updatedCartItems = {
        ...cartItems,
        [id]: {
          quantity: cartItems[id]?.quantity ? cartItems[id].quantity - 1 : 0,
        },
      };

      if (updatedCartItems[id].quantity <= 0) {
        delete updatedCartItems[id];
      }

      this.cartItems.next(updatedCartItems);
    }
  }
}
