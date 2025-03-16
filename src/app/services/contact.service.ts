import { Inject, Injectable } from '@angular/core';
import { ContactForm } from '../models/contact-form';
import { timer } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { AppLoggerToken, LOGGER_TOKEN } from '../tokens/logger-token';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
    constructor(
      @Inject(LOGGER_TOKEN) private readonly logger: AppLoggerToken,
    ){}

  submitContactForm(model: ContactForm){
    return timer(3000).pipe(
      tap(() => this.logger?.log(`ContactForm Submitted with Values: ${JSON.stringify(model)}`)),
      first()
    )
  }
}
