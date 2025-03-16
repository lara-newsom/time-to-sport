import { NgModule } from '@angular/core';
import { SubSectionComponent } from './sub-section.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardModule } from '../card/card.module';

@NgModule({
    declarations: [
      SubSectionComponent
    ],
    exports: [
      SubSectionComponent
    ],
    imports: [
      CardModule,
      RouterModule,
      CommonModule,
    ],
})
export class SubSectionModule { }