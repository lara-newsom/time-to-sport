import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../featured-product/shared-featured-product-styles.scss',]
})
export class HomeComponent {
  readonly homeImageUrl = '../../assets/images/heros/hero-5.jpg';
  readonly bannerText = `Next week is our annual 5k Run/Walk. We will start at the shop and then walk or run about two and a half kilometers and then we will come back.
  By the time we get back we will have run or walked five whole kilometers. Everyone who finishes can select a medal from our medal chest at the cashier.
  Sign up ahead of time to make sure that we know you are coming!`;
}
