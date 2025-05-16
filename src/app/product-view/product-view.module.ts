import { NgModule } from '@angular/core';
import { ProductViewComponent } from './product-view.component';
import { RouterModule } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PRODUCT_VIEW_ROUTES } from './product-view.routes';
import { SideMenuModule } from './side-menu/side-menu.module';
import { SharedUiModule } from '../shared-ui/shared-ui.module';
import { DetailViewComponent } from './detail-view/detail-view.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { TableViewComponent } from './table-view/table-view.component';


@NgModule({
  declarations: [
    ProductViewComponent,
  ],
  exports: [
    ProductViewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PRODUCT_VIEW_ROUTES),
    SideMenuModule,
    TableViewComponent,
    SharedUiModule,
    MatSlideToggleModule,
    NgOptimizedImage,
    DetailViewComponent
  ]
})
export class ProductViewModule {}