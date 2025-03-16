import { NgModule } from '@angular/core';
import { ProductViewComponent } from './product-view.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PRODUCT_VIEW_ROUTES } from './product-view.routes';
import { SideMenuModule } from './side-menu/side-menu.module';
import { SharedUiModule } from '../shared-ui/shared-ui.module';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { TableViewModule } from './table-view/table-view.module';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    ProductViewComponent,
    DetailViewComponent,
  ],
  exports: [
    ProductViewComponent,
    DetailViewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PRODUCT_VIEW_ROUTES),
    SideMenuModule,
    TableViewModule,
    SharedUiModule,
   MatSlideToggleModule,
  ]
})
export class ProductViewModule {
  constructor(){
    console.log('load product view module')
  }
 }