import { Directive, ElementRef } from '@angular/core';
import { CustomButtonDirective } from './custom-button.directive';

@Directive({
  standalone: true,
  selector: '[customBorderButton]',
  hostDirectives: [
    CustomButtonDirective
  ],
})
export class CustomBorderButtonDirective {

  constructor(
    private readonly elementRef: ElementRef,
  ) {
    this.elementRef.nativeElement.style['border-radius'] = 'var(--border-radius)';
  }
}
