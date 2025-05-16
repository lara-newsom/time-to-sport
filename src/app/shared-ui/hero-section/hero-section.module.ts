import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HeroSectionComponent } from './hero-section.component';

@NgModule({
    exports: [
        HeroSectionComponent
    ],
    imports: [
        CommonModule,
        NgOptimizedImage,
        HeroSectionComponent
    ]
})
export class HeroSectionModule { }