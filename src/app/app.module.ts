import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { LOGGER_TOKEN } from './tokens/logger-token';
import { LoggerService } from './services/logger.service';
import { NotFoundModule } from './not-found/not-found.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      bindToComponentInputs: true,
    }),
    BrowserAnimationsModule,
    CommonModule,
    HeaderComponent,
    NotFoundModule,
  ],
  bootstrap: [AppComponent],
  providers: [{
    provide: LOGGER_TOKEN,
    useClass: LoggerService
  }]
})
export class AppModule { }
