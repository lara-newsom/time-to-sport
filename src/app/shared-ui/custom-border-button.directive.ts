import { Directive, ElementRef, NgModule } from '@angular/core';

@Directive({
  selector: '[customBorderButton]',
})
export class CustomBorderButtonDirective {

  constructor(
    private readonly elementRef: ElementRef,
  ) {
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
