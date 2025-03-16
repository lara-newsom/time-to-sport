import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found.component';
import { SharedUiModule } from '../shared-ui/shared-ui.module';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  exports: [
    NotFoundComponent
  ],
  imports: [
    SharedUiModule
  ],
})
export class NotFoundModule { }