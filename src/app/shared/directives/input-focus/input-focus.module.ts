import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InputFocusDirective } from './input-focus.directive';



@NgModule({
  declarations: [
    InputFocusDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    InputFocusDirective
  ]
})
export class InputFocusModule { }
