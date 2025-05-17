import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BUSINESS_NAME } from '../../constants';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'sub-hero-logo',
    templateUrl: './sub-hero-logo.component.html',
    styleUrls: ['./sub-hero-logo.component.scss'],
    standalone: true,
    imports: [NgOptimizedImage],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubHeroLogoComponent {
  protected readonly logoUrl = '../../assets/images/badge.png';
  protected readonly BUSINESS_NAME = BUSINESS_NAME
}
