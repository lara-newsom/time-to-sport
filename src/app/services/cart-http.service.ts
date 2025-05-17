import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartHttpService {
  private cartItems = new BehaviorSubject<{[key: string]: { quantity: number }}>({});
  readonly cartItems$ = this.cartItems.asObservable();

  // Simulate an in progress cart
  getCartItems() {
    return of({
        '29': { quantity: 2 },
        '19': { quantity: 1 },
        '22': { quantity: 1 }
    }).pipe(
      delay(100) // Simulate network delay
    );
  }
}
