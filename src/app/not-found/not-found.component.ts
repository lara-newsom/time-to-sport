import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SubHeroLogoComponent } from '../shared-ui/sub-hero-logo/sub-hero-logo.component';
import { HeroSectionComponent } from '../shared-ui/hero-section/hero-section.component';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    imports: [HeroSectionComponent, SubHeroLogoComponent],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent {

}
