import { Injectable, computed, inject, signal } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly productService = inject(ProductService);

  readonly cartItems = signal<{[key: string]: { quantity: number }}>({});

  readonly cartItemsPlusQuantity = computed(() => {
    return Object.keys(this.cartItems()).reduce((acc, key) => {
      const product = this.productService.products().find((product) => product.id === key);
      if(product) {
        acc.push({
          ...product,
          quantity: this.cartItems()[key].quantity
        });     
      }
      return acc;
    }, [] as Product[])
  });
  
  readonly selectedItemPlusQuantity = computed(() => {
    if(this.productService.selectedProduct()) {
      const quantity = this.cartItems()[this.productService.selectedProduct().id]?.quantity || 0;
      return {
        ...this.productService.selectedProduct(),
        quantity
      }
    }
    return undefined;
  });



  readonly featuredProductsPlusQuantity = computed(() => {
    return this.productService.homeProducts().map((product) => ({
      ...product,
      quantity: this.cartItems()[product.id]?.quantity || 0
    }))
  });
  
  readonly cartTotals = computed(() => {
    const subtotal = Object.keys(this.cartItems()).reduce((acc, key) => {
      const product = this.productService.products().find((product) => product.id === key);
      if(product) {
        return acc + ((this.cartItems()[key].quantity || 0) * product.price);
      }
      return acc;
    }, 0);

    return {
      subtotal,
      salesTax: subtotal * 0.0625,
      shipping: subtotal * 0.05,
      total: subtotal + (subtotal * 0.0625) + (subtotal * 0.05)
    }
  });

  readonly totalItems = computed(() => {
    return Object.keys(this.cartItems()).reduce((acc, key) => {
      const product = this.productService.products().find((product) => product.id === key);
      if(product) {
        return acc + (this.cartItems()[key].quantity || 0);
      }
      return acc;
    }, 0);
  });

  setCartItems(items: {[key: string]: { quantity: number }}):void {
    this.cartItems.set(items);
  }

  addCartItem (id?: string) {
    if(id){
      const cartItems = this.cartItems();
      this.cartItems.set({
        ...cartItems,
        [id]: {
          quantity: cartItems[id]?.quantity ? cartItems[id].quantity + 1 : 1
        }
      })
    }
  }

  decrementCartItem (id?: string) {
    if(id) {
      const cartItems = this.cartItems();
      const updatedCartItems = {
        ...cartItems,
        [id]: {
          quantity: cartItems[id]?.quantity ? cartItems[id].quantity - 1 : 0
        }
      }

      if(updatedCartItems[id].quantity <= 0){
        delete updatedCartItems[id];
      }

      this.cartItems.set(updatedCartItems);
    }
  }
}
