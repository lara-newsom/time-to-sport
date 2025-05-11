import { Directive, ElementRef, inject, NgModule } from '@angular/core';

@Directive({
  selector: '[customBorderButton]',
})
export class CustomBorderButtonDirective {
  private elementRef = inject(ElementRef);
  constructor() {
    this.elementRef.nativeElement.style['border-radius'] = 'var(--border-radius)';
  }
}

@NgModule({
  declarations: [
    CustomBorderButtonDirective
  ],
  exports: [
    CustomBorderButtonDirective
  ],
})
export class CustomBorderButtonDirectiveModule { }
