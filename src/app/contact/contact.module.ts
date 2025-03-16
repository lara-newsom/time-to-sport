import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ContactComponent } from './contact.component';
import { SharedUiModule } from '../shared-ui/shared-ui.module';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { TwoPanelLayoutModule } from '../shared-ui/two-panel-layout/two-panel-layout.module';

export const CONTACT_ROUTES: Route[] = [
  {
    path: '',
    component: ContactComponent,
  }
]

@NgModule({
  declarations: [
    ContactComponent
  ],
  exports: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedUiModule,
    MatProgressSpinnerModule,
    TwoPanelLayoutModule,
    RouterModule.forChild(CONTACT_ROUTES)
  ],
  providers: [
  ],
})
export class ContactModule { }