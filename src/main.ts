import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideZoneChangeDetection } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app/app.routes';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { LoggerService } from './app/services/logger.service';
import { LOGGER_TOKEN } from './app/tokens/logger-token';

bootstrapApplication(AppComponent, {
    providers: [
        {
            provide: LOGGER_TOKEN,
            useClass: LoggerService
        },
        provideRouter(routes, withComponentInputBinding()),
        provideAnimations(),
        provideZoneChangeDetection({ eventCoalescing: true })
    ]
})
  .catch(err => console.error(err));
