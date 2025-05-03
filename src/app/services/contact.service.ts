import { Injectable, inject } from '@angular/core';
import { ContactForm } from '../models/contact-form';
import { timer } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { AppLoggerToken, LOGGER_TOKEN } from '../tokens/logger-token';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly logger = inject<AppLoggerToken>(LOGGER_TOKEN);

  submitContactForm(model: ContactForm) {
    return timer(3000).pipe(
      tap(() => this.logger?.log(`ContactForm Submitted with Values: ${JSON.stringify(model)}`)),
      first()
    )
  }
}
