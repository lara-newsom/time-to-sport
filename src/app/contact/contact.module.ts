import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ContactComponent } from './contact.component';

import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { CustomBorderButtonDirective } from '../shared-ui/custom-border-button.directive';

export const CONTACT_ROUTES: Route[] = [
  {
    path: '',
    component: ContactComponent,
  }
]

@NgModule({
    exports: [
        ContactComponent
    ],
    imports: [
    CommonModule,
    FormsModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(CONTACT_ROUTES),
    NgOptimizedImage,
    CustomBorderButtonDirective,
    ContactComponent
],
    providers: [],
})
export class ContactModule { }