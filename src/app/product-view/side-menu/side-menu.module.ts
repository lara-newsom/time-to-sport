import { NgModule } from '@angular/core';
import { SideMenuComponent } from './side-menu.component';
import { RouterModule } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@NgModule({
    exports: [
        SideMenuComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        NgOptimizedImage,
        SideMenuComponent,
    ],
})
export class SideMenuModule { }