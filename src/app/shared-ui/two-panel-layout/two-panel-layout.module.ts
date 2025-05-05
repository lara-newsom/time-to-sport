import { NgModule } from '@angular/core';
import { TwoPanelLayoutComponent } from './two-panel-layout.component';
import { CommonModule } from '@angular/common';

@NgModule({
    exports: [
        TwoPanelLayoutComponent
    ],
    imports: [
        CommonModule,
        TwoPanelLayoutComponent
    ]
})
export class TwoPanelLayoutModule { }