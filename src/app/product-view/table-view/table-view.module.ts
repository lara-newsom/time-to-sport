import { NgModule } from '@angular/core';
import { TableViewComponent } from './table-view.component';
import { CommonModule, NgOptimizedImageModule } from '@angular/common';
import { SharedUiModule } from 'src/app/shared-ui/shared-ui.module';


@NgModule({
  declarations: [
    TableViewComponent
  ],
  exports: [
    TableViewComponent
  ],
  imports: [CommonModule, SharedUiModule, NgOptimizedImageModule],
})
export class TableViewModule { }