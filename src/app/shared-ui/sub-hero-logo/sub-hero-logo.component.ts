import { Component } from '@angular/core';
import { BUSINESS_NAME } from '../../constants';

@Component({
  selector: 'sub-hero-logo',
  templateUrl: './sub-hero-logo.component.html',
  styleUrls: ['./sub-hero-logo.component.scss']
})
export class SubHeroLogoComponent {
  readonly logoUrl = '../../assets/images/badge.png';
  readonly BUSINESS_NAME = BUSINESS_NAME
}
