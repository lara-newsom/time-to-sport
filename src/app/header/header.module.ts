import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@NgModule({
    exports: [
        HeaderComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
        NgOptimizedImage,
        HeaderComponent
    ],
})
export class HeaderModule { }