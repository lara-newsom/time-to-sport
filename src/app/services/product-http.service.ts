import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { PRODUCTS } from '../models/product-data.mock';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {
    httpGetProducts() {
        return of(PRODUCTS).pipe(
            delay(100) // Simulate network delay
        );
    }
}
