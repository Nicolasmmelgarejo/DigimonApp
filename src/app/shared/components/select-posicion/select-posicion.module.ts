import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SelectPosicionComponent } from './select-posicion.component';




@NgModule({
  declarations: [
    SelectPosicionComponent
  ],
  imports: [
    CommonModule,
    RouterModule 
  ],
  exports: [
    SelectPosicionComponent
  ]
})

export class SelectPosicionModule { }
