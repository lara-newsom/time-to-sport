import { Component } from '@angular/core';

import { LOGGER_TOKEN } from './tokens/logger-token';
import { LoggerService } from './services/logger.service';
import { BUSINESS_NAME } from './constants';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [
        {
            provide: LOGGER_TOKEN,
            useClass: LoggerService,
        }
    ],
    standalone: true,
    imports: [HeaderComponent, RouterOutlet]
})
export class AppComponent {
  readonly BUSINESS_NAME = BUSINESS_NAME;
}
