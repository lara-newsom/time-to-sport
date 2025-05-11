import { NgModule } from '@angular/core';
import { SideMenuComponent } from './side-menu.component';
import { RouterModule } from '@angular/router';
import { CommonModule, NgOptimizedImageModule } from '@angular/common';

@NgModule({
  declarations: [
    SideMenuComponent
  ],
  exports: [
    SideMenuComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    NgOptimizedImageModule,
  ],
})
export class SideMenuModule { }