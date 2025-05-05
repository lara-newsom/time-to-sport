import { NgModule } from '@angular/core';
import { SubSectionComponent } from './sub-section.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardModule } from '../card/card.module';

@NgModule({
    exports: [
        SubSectionComponent
    ],
    imports: [
        CardModule,
        RouterModule,
        CommonModule,
        SubSectionComponent,
    ],
})
export class SubSectionModule { }