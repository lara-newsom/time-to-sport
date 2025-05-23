import { Component, Inject, OnDestroy } from '@angular/core';
import { ContactForm } from '../models/contact-form';
import { ContactService  } from '../services/contact.service';
import { catchError, takeUntil, tap } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import { AppLoggerToken, LOGGER_TOKEN } from '../tokens/logger-token';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnDestroy{
  constructor(
    @Inject(LOGGER_TOKEN) private readonly logger: AppLoggerToken,
    private readonly contactService: ContactService
  ){}

  model: ContactForm = {
    fullName: '',
    email: '',
    phone: '',
    comment: '',
  };

  submitted = false;
  loading = false;

  private readonly destroyed$ = new ReplaySubject<void>(1);

  submitForm(model: ContactForm) {
    this.submitted = true;
    this.loading = true;

    this.contactService.submitContactForm(model).pipe(
      tap(() => {
        this.loading = false;
        this.logger?.log(`Contact form submitted with ${JSON.stringify(model)}`);
      }),
      catchError((error) => {
        this.logger?.error(`Contact errored with ${JSON.stringify(this.model)}`);
        return error;
      }),
      takeUntil(this.destroyed$)
    ).subscribe();
  }

  clearForm() {
    this.model = {
      fullName: '',
      email: '',
      phone: '',
      comment: '',
    };
    this.submitted = false;
  }

  ngOnDestroy(): void {
      this.destroyed$.next();
      this.destroyed$.complete();
  }
}
