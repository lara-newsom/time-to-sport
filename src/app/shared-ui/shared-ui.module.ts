import { NgModule } from '@angular/core';
import { CustomButtonDirectiveModule } from './custom-button.directive';
import { TwoPanelLayoutModule } from './two-panel-layout/two-panel-layout.module';
import { CustomBorderButtonDirectiveModule } from './custom-border-button.directive';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SubSectionComponent } from './sub-section/sub-section.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardModule } from './card/card.module';
import { AddToCartButtonModule } from './add-to-cart-button/add-to-cart-button.module';
import { HeroSectionModule } from './hero-section/hero-section.module';
import { SubSectionModule } from './sub-section/sub-section.module';
import { SubHeroLogoModule } from './sub-hero-logo/sub-hero-logo.module';

@NgModule({
    exports: [
      SubSectionModule,
      HeroSectionModule,
      TwoPanelLayoutModule,
      CustomButtonDirectiveModule,
      CustomBorderButtonDirectiveModule,
      AddToCartButtonModule,
      SubHeroLogoModule,
      RouterModule,
      CommonModule,
      CardModule,
    ],
    imports: [
      SubSectionModule,
      HeroSectionModule,
      TwoPanelLayoutModule,
      CustomButtonDirectiveModule,
      CustomBorderButtonDirectiveModule,
      AddToCartButtonModule,
      SubHeroLogoModule,
      RouterModule,
      CommonModule,
      CardModule,
    ],
})
export class SharedUiModule { }