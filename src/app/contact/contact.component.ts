import { Component, inject, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { ContactForm } from "../models/contact-form";
import { ContactService } from "../services/contact.service";
import { catchError, takeUntil, tap } from "rxjs/operators";
import { ReplaySubject } from "rxjs";
import { LOGGER_TOKEN } from "../tokens/logger-token";
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { CustomBorderButtonDirective } from "../shared-ui/custom-border-button.directive";
import { CustomButtonDirective } from "../shared-ui/custom-button.directive";
import { FormsModule } from "@angular/forms";
import { NgOptimizedImage } from "@angular/common";
import { TwoPanelLayoutComponent } from "../shared-ui/two-panel-layout/two-panel-layout.component";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TwoPanelLayoutComponent,
    NgOptimizedImage,
    FormsModule,
    CustomButtonDirective,
    CustomBorderButtonDirective,
    MatProgressSpinner
],
})
export class ContactComponent implements OnDestroy {
  private readonly logger = inject(LOGGER_TOKEN);
  private readonly contactService = inject(ContactService);
  private readonly cd = inject(ChangeDetectorRef);

  model: ContactForm = {
    fullName: "",
    email: "",
    phone: "",
    comment: "",
  };

  submitted = false;
  loading = false;

  private readonly destroyed$ = new ReplaySubject<void>(1);

  submitForm(model: ContactForm) {
    this.submitted = true;
    this.loading = true;

    this.contactService
      .submitContactForm(model)
      .pipe(
        tap(() => {
          this.loading = false;
          this.logger?.log(
            `Contact form submitted with ${JSON.stringify(model)}`
          );
        }),
        catchError((error) => {
          this.logger?.error(
            `Contact errored with ${JSON.stringify(this.model)}`
          );
          return error;
        }),
        takeUntil(this.destroyed$)
      )
      .subscribe(() => this.cd.markForCheck());
  }

  clearForm() {
    this.model = {
      fullName: "",
      email: "",
      phone: "",
      comment: "",
    };
    this.submitted = false;
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
