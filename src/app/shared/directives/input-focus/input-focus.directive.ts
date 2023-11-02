import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFocus]',
})
export class InputFocusDirective {
  constructor(private el: ElementRef) {}

  @HostListener('focus', ['$event'])
  onFocus(event: Event) {
    const input = this.el.nativeElement as HTMLInputElement;
    const label = input.previousElementSibling as HTMLElement;
    const container = input.parentElement as HTMLElement;

    label.classList.add('Spam-Personalizado-Focus', 'Spam-Personalizado-Top');
    container.classList.add('Label-Personalizado-Focus');
  }

  @HostListener('blur', ['$event'])
  onBlur(event: Event) {
    const input = this.el.nativeElement as HTMLInputElement;
    const label = input.previousElementSibling as HTMLElement;
    const container = input.parentElement as HTMLElement;

    input.value = input.value.trim();
    if (input.value.trim().length === 0) {
      label.classList.remove('Spam-Personalizado-Focus', 'Spam-Personalizado-Top');
    }
    container.classList.remove('Label-Personalizado-Focus');
  }
}
