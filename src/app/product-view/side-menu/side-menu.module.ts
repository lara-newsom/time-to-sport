import { NgModule } from '@angular/core';
import { SideMenuComponent } from './side-menu.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SideMenuComponent
  ],
  exports: [
    SideMenuComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
})
export class SideMenuModule { }