import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { LOGGER_TOKEN } from './tokens/logger-token';
import { LoggerService } from './services/logger.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NoopAnimationsModule,
    CommonModule,
    HeaderModule,
  ],
  bootstrap: [AppComponent],
  providers: [{
    provide: LOGGER_TOKEN,
    useClass: LoggerService
  }]
})
export class AppModule { }
