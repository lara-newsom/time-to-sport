import { Injectable, inject, signal, computed, effect } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from '../models/product';
import { CartHttpService } from './cart-http.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly productService = inject(ProductService);
  private readonly cartHttpService = inject(CartHttpService);

  private readonly products = toSignal(this.productService.products, { initialValue: [] });
  private readonly homeProducts = toSignal(this.productService.homeProducts, { initialValue: [] });
  private readonly selectedProduct = toSignal(this.productService.selectedProduct, { initialValue: undefined });

  readonly cartItems = signal<{ [key: string]: { quantity: number } }>({});

  setCartItems(items: { [key: string]: { quantity: number } }): void {
    this.cartItems.set(items);
  }

  constructor() {
    effect(() => {
      this.cartHttpService.getCartItems().subscribe((cartItems) => {
        this.cartItems.set(cartItems);
      });
    });
  }

  readonly cartItemsPlusQuantity = computed(() => {
    return Object.keys(this.cartItems()).reduce((acc, key) => {
      const product = this.products().find((product: Product) => product.id === key);
      if (product) {
        acc.push({ ...product, quantity: this.cartItems()[key].quantity });
      }
      return acc;
    }, [] as Product[]);
  });

  readonly selectedItemPlusQuantity = computed(() => {
    const selectedProduct = this.selectedProduct();
    const quantity = selectedProduct ? this.cartItems()[selectedProduct.id]?.quantity || 0 : 0;
    return selectedProduct ? { ...selectedProduct, quantity } : undefined;
  });

  readonly featuredProductsPlusQuantity = computed(() => {
    return this.homeProducts().map((product: Product) => ({
      ...product,
      quantity: this.cartItems()[product.id]?.quantity || 0,
    }));
  });

  readonly cartTotals = computed(() => {
    const subtotal = Object.keys(this.cartItems()).reduce((acc, key) => {
      const product = this.products().find((product: Product) => product.id === key);
      if (product) {
        return acc + (this.cartItems()[key].quantity || 0) * product.price;
      }
      return acc;
    }, 0);
    return {
      subtotal,
      salesTax: subtotal * 0.0625,
      shipping: subtotal * 0.05,
      total: subtotal + subtotal * 0.0625 + subtotal * 0.05,
    };
  });

  readonly totalItems = computed(() => {
    return Object.keys(this.cartItems()).reduce((acc, key) => {
      const product = this.products().find((product: Product) => product.id === key);
      if (product) {
        return acc + (this.cartItems()[key].quantity || 0);
      }
      return acc;
    }, 0);
  });

  addCartItem(id?: string) {
    if (id) {
      this.cartItems.update((cartItems) => ({
        ...cartItems,
        [id]: {
          quantity: cartItems[id]?.quantity ? cartItems[id].quantity + 1 : 1,
        },
      }));
    }
  }

  decrementCartItem(id?: string) {
    if (id) {
      const cartItems = this.cartItems();
      const updatedCartItems = {
        ...cartItems,
        [id]: {
          quantity: cartItems[id]?.quantity ? cartItems[id].quantity - 1 : 0,
        },
      };

      if (updatedCartItems[id].quantity <= 0) {
        delete updatedCartItems[id];
      }

      this.cartItems.set(updatedCartItems);
    }
  }
}
