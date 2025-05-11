import { Component, Inject, OnDestroy } from '@angular/core';
import { of, ReplaySubject } from 'rxjs';
import { catchError, takeUntil, tap } from 'rxjs/operators';
import { ContactForm } from '../models/contact-form';
import { Router } from '@angular/router';
import { ROUTE_TOKENS } from '../models/route-tokens';

import { CartService  } from '../services/cart.service';
import { ContactService  } from '../services/contact.service';
import { AppLoggerToken, LOGGER_TOKEN } from '../tokens/logger-token';
import { BUSINESS_NAME } from '../constants';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedUiModule } from '../shared-ui/shared-ui.module';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SharedUiModule,
    MatProgressSpinnerModule,
    NgOptimizedImage,
  ],
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnDestroy {
  constructor(
    protected readonly cartService: CartService,
    private readonly router: Router,
    @Inject(LOGGER_TOKEN) private readonly logger: AppLoggerToken,
    protected readonly contactService: ContactService
  ){}
  protected readonly ROUTE_TOKENS = ROUTE_TOKENS;
  protected readonly BUSINESS_NAME= BUSINESS_NAME;

  destroyed$ = new ReplaySubject<void>(1);

  model: ContactForm = {
    fullName: '',
    email: '',
    phone: '',
    comment: '',
  };
  submitted = false;
  loading = false;

  checkout() {
    this.loading = true;

    this.contactService.submitContactForm(this.model).pipe(
      tap(() => {
        this.submitted = true;
        this.loading = false;
        this.cartService.setCartItems({});
        this.logger?.log(`cart submitted with ${JSON.stringify(this.model)}`);
      }),
      catchError((error: unknown) => {
        this.logger?.error(`cart errored with ${JSON.stringify(this.model)}`);
        return of(error);
      }),
      takeUntil(this.destroyed$)
    ).subscribe()
  }

  returnToProducts() {
    this.router.navigate(['/', ROUTE_TOKENS.products, 'all']);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
