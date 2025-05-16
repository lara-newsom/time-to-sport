import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SubSectionComponent } from '../shared-ui/sub-section/sub-section.component';
import { FeaturedProductComponent } from '../featured-product/featured-product.component';
import { SubHeroLogoComponent } from '../shared-ui/sub-hero-logo/sub-hero-logo.component';
import { HeroSectionComponent } from '../shared-ui/hero-section/hero-section.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss', '../featured-product/shared-featured-product-styles.scss',],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        HeroSectionComponent,
        SubHeroLogoComponent,
        FeaturedProductComponent,
        SubSectionComponent,
    ],
})
export class HomeComponent {
  readonly homeImageUrl = '../../assets/images/heros/hero-5.jpg';
  readonly bannerText = `Next week is our annual 5k Run/Walk. We will start at the shop and then walk or run about two and a half kilometers and then we will come back.
  By the time we get back we will have run or walked five whole kilometers. Everyone who finishes can select a medal from our medal chest at the cashier.
  Sign up ahead of time to make sure that we know you are coming!`;
}
