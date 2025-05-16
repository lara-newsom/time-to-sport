import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { CommonModule } from '@angular/common';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app/app.routes';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { LoggerService } from './app/services/logger.service';
import { LOGGER_TOKEN } from './app/tokens/logger-token';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, CommonModule),
        {
            provide: LOGGER_TOKEN,
            useClass: LoggerService
        },
        provideRouter(routes, withComponentInputBinding()),
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
