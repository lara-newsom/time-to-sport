import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-hero-section',
    templateUrl: './hero-section.component.html',
    styleUrls: ['./hero-section.component.scss'],
    standalone: true,
    imports: [NgOptimizedImage],
})
export class HeroSectionComponent {
  @Input() imageUrl = '../../assets/images/heros/hero-1.jpg';
}


