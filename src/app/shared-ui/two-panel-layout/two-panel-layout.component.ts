import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
    selector: 'app-two-panel-layout',
    templateUrl: './two-panel-layout.component.html',
    styleUrls: ['./two-panel-layout.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwoPanelLayoutComponent {
  readonly ariaLabel = input.required<string>();
  readonly ariaLiveSetting = input<'assertive' | 'polite' | 'off'>('off')
}
