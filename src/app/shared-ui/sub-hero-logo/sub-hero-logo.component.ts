import { Component } from '@angular/core';
import { BUSINESS_NAME } from '../../constants';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'sub-hero-logo',
    templateUrl: './sub-hero-logo.component.html',
    styleUrls: ['./sub-hero-logo.component.scss'],
    standalone: true,
    imports: [NgOptimizedImage]
})
export class SubHeroLogoComponent {
  readonly logoUrl = '../../assets/images/badge.png';
  readonly BUSINESS_NAME = BUSINESS_NAME
}
