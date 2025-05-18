import { provideZoneChangeDetection } from '@angular/core';
import {
  provideClientHydration,
  withEventReplay,
  withIncrementalHydration,
} from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { LoggerService } from './services/logger.service';
import { LOGGER_TOKEN } from './tokens/logger-token';

export const appConfig = {
  providers: [
    {
      provide: LOGGER_TOKEN,
      useClass: LoggerService,
    },
    provideRouter(routes, withComponentInputBinding()),
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideClientHydration(
        withEventReplay(),
        withIncrementalHydration(),
    ),
  ],
};
