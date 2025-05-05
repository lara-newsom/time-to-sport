import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-two-panel-layout',
    templateUrl: './two-panel-layout.component.html',
    styleUrls: ['./two-panel-layout.component.scss'],
    standalone: true
})
export class TwoPanelLayoutComponent {
  @Input() ariaLabel!: string;
  @Input() ariaLiveSetting: 'assertive' | 'polite' | 'off' = 'off';
}
