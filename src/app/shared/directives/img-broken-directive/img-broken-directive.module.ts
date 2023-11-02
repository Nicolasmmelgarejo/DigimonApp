import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ImgBrokenDirective } from '@shared/directives/img-broken-directive/img-broken.directive';


@NgModule({
  declarations: [
    ImgBrokenDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ImgBrokenDirective
  ]
})

export class ImgBrokenDirectiveModule { }
