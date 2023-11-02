import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImgBroken]'
})
export class ImgBrokenDirective {

  @Input() customImg: string = 'https://amazonia.mapbiomas.org/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png'
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement;
    console.log('🔴 Esta imagen revento -->', this.elHost);
    elNative.src = this.customImg;

  }

  constructor(private elHost: ElementRef) { }

}
