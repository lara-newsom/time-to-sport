import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { CommonModule, NgOptimizedImageModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    NgOptimizedImageModule,
  ],
})
export class HeaderModule { }