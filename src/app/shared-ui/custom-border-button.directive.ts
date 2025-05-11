import { Directive, ElementRef, inject } from '@angular/core';
import { CustomButtonDirective } from './custom-button.directive';

@Directive({
  standalone: true,
  selector: '[customBorderButton]',
  hostDirectives: [
    CustomButtonDirective
  ]
})
export class CustomBorderButtonDirective {
  private elementRef = inject(ElementRef);
  constructor() {
    this.elementRef.nativeElement.style['border-radius'] = 'var(--border-radius)';
  }
}
