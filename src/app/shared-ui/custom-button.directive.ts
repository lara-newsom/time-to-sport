import { Directive, ElementRef, HostListener, NgModule, } from '@angular/core';

@Directive({
  selector: '[customButton]',
})
export class CustomButtonDirective {

  constructor(
    private elementRef: ElementRef
  ) {
    this.elementRef.nativeElement.style.padding= '10px';
    this.elementRef.nativeElement.style['min-width'] = '44px';
    this.elementRef.nativeElement.style['min-height'] = '44px';
    this.elementRef.nativeElement.style['color'] = 'var(--white)';
    this.elementRef.nativeElement.style['font-size'] = 'var(--element-text)';
    this.addBlurStyles();
  }
  addFocusStyles() {
    if(!this.elementRef.nativeElement.disabled) {
      this.elementRef.nativeElement.style['background-color'] = 'var(--background-dark-blue-hover)';
      this.elementRef.nativeElement.style.filter = 'drop-shadow(0 0 4px var(--drop-shadow))';
      this.elementRef.nativeElement.style['font-weight'] = 'var(--semi-bold-text)';
    }
  }

  addBlurStyles() {
    this.elementRef.nativeElement.style['background-color'] = 'var(--background-dark-blue)';
    this.elementRef.nativeElement.style.filter = 'none';
    this.elementRef.nativeElement.style['font-weight'] = 'var(--regular-text)';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.addFocusStyles();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.addBlurStyles();
  }

  @HostListener('focus') onFocus() {
    this.addFocusStyles();
  }

  @HostListener('blur') onBlur() {
    this.addBlurStyles();
  }
}


@NgModule({
  declarations: [
    CustomButtonDirective
  ],
  exports: [
    CustomButtonDirective
  ],
})
export class CustomButtonDirectiveModule { }