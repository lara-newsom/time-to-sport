import { NgModule } from '@angular/core';
import { TwoPanelLayoutComponent } from './two-panel-layout.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TwoPanelLayoutComponent
  ],
  exports: [
    TwoPanelLayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TwoPanelLayoutModule { }