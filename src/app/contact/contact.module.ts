import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ContactComponent } from './contact.component';
import { SharedUiModule } from '../shared-ui/shared-ui.module';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { TwoPanelLayoutModule } from '../shared-ui/two-panel-layout/two-panel-layout.module';
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
        SharedUiModule,
        MatProgressSpinnerModule,
        TwoPanelLayoutModule,
        RouterModule.forChild(CONTACT_ROUTES),
        NgOptimizedImage,
        CustomBorderButtonDirective,
        ContactComponent
    ],
    providers: [],
})
export class ContactModule { }