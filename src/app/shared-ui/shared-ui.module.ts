import { NgModule } from '@angular/core';
import { CustomButtonDirective } from './custom-button.directive';
import { TwoPanelLayoutModule } from './two-panel-layout/two-panel-layout.module';
import { CustomBorderButtonDirective } from './custom-border-button.directive';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardModule } from './card/card.module';
import { AddToCartButtonModule } from './add-to-cart-button/add-to-cart-button.module';
import { HeroSectionModule } from './hero-section/hero-section.module';
import { SubHeroLogoModule } from './sub-hero-logo/sub-hero-logo.module';
import { SubSectionComponent } from './sub-section/sub-section.component';

@NgModule({
    exports: [
      SubSectionComponent,
      HeroSectionModule,
      TwoPanelLayoutModule,
      CustomButtonDirective,
      CustomBorderButtonDirective,
      AddToCartButtonModule,
      SubHeroLogoModule,
      RouterModule,
      CommonModule,
      CardModule,
    ],
    imports: [
      SubSectionComponent,
      HeroSectionModule,
      TwoPanelLayoutModule,
      CustomButtonDirective,
      CustomBorderButtonDirective,
      AddToCartButtonModule,
      SubHeroLogoModule,
      RouterModule,
      CommonModule,
      CardModule,
    ],
})
export class SharedUiModule { }